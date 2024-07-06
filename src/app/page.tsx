export default function Home() {
  return (
    <section className="section is-primary">
      <h1 className="title">Section</h1>
      <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>,
        like the one you're currently reading.
      </h2>

      <div className="block">
        This text is within a <strong>block</strong>.
      </div>
      <div className="block">
        This text is within a <strong>second block</strong>. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
        fringilla egestas. Nullam condimentum luctus turpis.
      </div>
      <div className="block">
        This text is within a <strong>third block</strong>. This block has no
        margin at the bottom.
      </div>
    </section>
  );
}
