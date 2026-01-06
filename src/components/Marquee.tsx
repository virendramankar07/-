const Marquee = () => {
  const mantra = "🔔 || ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा || 🔔";

  return (
    <div className="fixed top-[64px] md:top-[80px] left-0 right-0 z-40 marquee-container">
      <div className="marquee-text text-sm md:text-base py-1">
        {mantra} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {mantra} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {mantra}
      </div>
    </div>
  );
};

export default Marquee;
