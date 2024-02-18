const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4 ">Contact Us</h1>
      <form action="">
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="message"
        />
        <button className=" m-2 p-4 bg-black text-white rounded-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
