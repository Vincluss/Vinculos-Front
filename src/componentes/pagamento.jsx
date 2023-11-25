import React from 'react';

const Pagamento = ({ aberto, fechar, children }) => {
if (!aberto) return null;

return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
        <div className=" fixed w-[50vw] h-[85vh] bg-white rounded-md z-50 flex flex-col items-center justify-center">
            <button
                className="bg-red-500 absolute top-0 right-0 py-2 px-4 rounded-md"
                onClick={fechar}
            >
            X
            </button>
            {children}
        </div>
    </div>
);
};

export default Pagamento;