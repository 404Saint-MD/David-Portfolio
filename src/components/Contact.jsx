function Contact(){
    return(


<main className="bg-black text-white min-h-screen">

      <section className="px-20 py-24">
        <h1 className="text-[70px] md:text-[120px] font-black font-[Inter] leading-none">
          LET'S TALK
        </h1>

        <p className="text-gray-400 text-xl mt-6 max-w-2xl font-[Inter] leading-relaxed">
          Have a project in mind or want to work together? Send me a message and I will get back to you.
        </p>

        <form className="mt-14 max-w-2xl flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
          />
          <input
          type="text"
          placeholder="Your Company Name"
          className="bg-transparent border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="bg-transparent border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
          />

          <button className="bg-orange-600 hover:bg-orange-700 hover:shadow-orange-600 shadow-2xl  transition-all duration-300 rounded-xl px-8 py-4 font-bold w-fit">
            Send Message
          </button>
        </form>
      </section>
    </main>


    );
}
export default Contact;