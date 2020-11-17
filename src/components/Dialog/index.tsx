import React from "react";

import Item from "./Item";
import Title from "./Title";

import { normalizeDialog } from "./helpers";
import reducer from "./reducer";
import data from "../../data";

import "./style.css";

interface IProps {
    newMessage?: any
}

const Dialog: React.FC<IProps> = ({ newMessage }) => {
    const dialogRef = React.useRef<HTMLDivElement>(null);
    const [state, dispatch] = React.useReducer(reducer, {
        messages: data,
    });

    React.useEffect(() => {
        if (newMessage) {
            dispatch({
                type: "add-message",
                payload: newMessage,
            });

            setTimeout(() => {
                dispatch({
                    type: "update-status",
                    payload: {
                        id: newMessage.id,
                        status: "readed",
                    },
                });
            }, 2000);
        }
    }, [newMessage]);

    React.useEffect(() => {
        if (dialogRef && dialogRef.current) {
            dialogRef.current.scrollTop = dialogRef.current.scrollHeight;
        }
    }, [state.messages.length]);

    const onRemove = (id: number) => {
        dispatch({
            type: "remove-message",
            payload: id,
        });
    };

    const normalizedDialog = normalizeDialog(state.messages);

    return (
        <div className="dialog">
            <div ref={dialogRef} className="overflow">
                {normalizedDialog.map((item) =>
                    item.type === "message" ? (
                        <Item {...item} key={item.id} onRemove={onRemove} />
                    ) : (
                            <Title key={item.id} date={item.date} />
                        )
                )}
            </div>
        </div>
    );
};

// Dialog.propTypes = {
//     newMessage: PropTypes.shape({
//         id: PropTypes.number,
//     }),
// };

export default Dialog;