import CloseIcon from "./CloseIcon.tsx";

type Props = {
    title?: string;
    info: string;
    closeModal: () => void
}
const Modal = ({title, info, closeModal}: Props) => {
    return (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10"
             onClick={closeModal}>
            <div className="relative max-h-full w-full max-w-[90vw] md:max-w-xl overflow-y-auto rounded-2xl bg-white text-black px-2"
                 onClick={(ev) => ev.stopPropagation()}>
                <button className="btn-sm absolute right-0 top-3 text-black" onClick={closeModal}><CloseIcon/></button>
                <div className="w-full">
                    <div className="m-4 my-20 max-w-[400px] mx-auto">
                        {title &&
                            <div className="mb-8">
                                <h1 className="mb-4 text-3xl font-extrabold">{title}</h1>
                            </div>
                        }
                        <div className="space-y-4">
                            <p>
                                {info}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal