import { RiAdminLine } from "react-icons/ri";

const TryDemo = ({ handleLogin }) => {
    const credentials = [
        {
            role: "Tutor",
            email: "karim.hossain@tutor.com",
            password: "test123"

        },
        {
            role: "Student",
            email: "student@student.com",
            password: "test123"

        }
    ]
    return (
        <>
            <button
                className='btn btn-outline w-full text-sm secondary-btn'
                onClick={() => document.getElementById('try_demo').showModal()}
            >
                <RiAdminLine fontSize={18} />Try Demo
            </button>

            <dialog id="try_demo" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl pb-6">Login with Demo Accounts</h3>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('try_demo').close()}>✕</button>
                    <div>
                        {
                            credentials.map(credential => <div key={credential.role} className="flex justify-between items-center mb-5">
                                <div className="text-sm text-gray-500">
                                    <h2 className="text-lg text-gray-700 font-semibold">{credential.role}</h2>
                                    <p>Email: {credential.email}</p>
                                    <p>Password: {credential.password}</p>
                                </div>
                                <button
                                    onClick={() => handleLogin({
                                        email: credential.email,
                                        password: credential.password
                                    })}
                                    className="btn primary-btn"
                                >
                                    Try
                                </button>
                            </div>)
                        }
                    </div>

                </div>
            </dialog>
        </>
    );
};

export default TryDemo;