import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {

    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const[form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }
    //service_2grs4ko
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            emailjs.send(
                'service_2grs4ko', 
                'template_iqh5001',
                {
                    from_name: form.name,
                    to_name: 'Merrill Achigan Dako',
                    fromt_email: form.email,
                    to_email: 'merrillachigan@gmail.com',
                    message: form.message
                }, 'YVFyyRBMZDorG_INI')
            setLoading(false);
            alert('Your message has been sent !')
            setForm({
                name: '',
                email: '',
                message: ''
            })
        } catch(error){
            setLoading(false);
            console.log(error);
            alert('Ugh, seems like something went wrong..')
        }
    }

    return (
        <section className="c-space my-20" id="contact">

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute min-h-screen inset-0"/>
                <div className="contact-container">
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                    Got a project in mind or just want to chat about UI/UX, web development, or anything creative? 
                    I’m always up for new collaborations and challenges. Whether you need a sleek landing page, a 
                    standout brand experience, or just some fresh ideas, let’s make it happen.</p>

                    <form action="" ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Merrill Achigan Dako"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="merrillachigan@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="📩 Drop me a message"
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending..' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact