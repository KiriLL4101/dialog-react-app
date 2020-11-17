import React, { useState } from "react";

import "./style.css";

interface IProps {
    onAddMessage: (item: any) => void
}

const Sender: React.FC<IProps> = ({ onAddMessage }) => {
    const [value, setValue] = useState<string>("");

    const onChange = (event: any) => setValue(event.target.value);
    const onSubmit = (event: any) => {
        event.preventDefault();

        onAddMessage({
            id: Date.now(),
            avatar:
                "https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg",
            message: value,
            date: new Date().toISOString(),
            is: "my",
            status: "sended",
        });
        setValue("");
    };

    return (
        <form className="sender" onSubmit={onSubmit}>
            <input
                placeholder="Введите сообщение"
                value={value}
                onChange={onChange}
                required
            />
            <button>Отправить</button>
        </form>
    );
};

// Sender.propTypes = {
//     onAddMessage: PropTypes.func.isRequired,
// };

export default Sender;