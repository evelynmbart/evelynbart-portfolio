import "./Contact.css";

export function Contact() {
  return (
    <section className="contact-container" id="contact">
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
          />
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your email"
            required
          />
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message..."
            required
          />
          <input className="hover btn" type="submit" value="Submit" />
        </div>
      </form>
    </section>
  );
}
