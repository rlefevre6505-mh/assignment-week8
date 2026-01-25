import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.text}>
      <h2>About GigBlog</h2>

      <p>
        sign up / log in - <i>coming soon</i>
      </p>

      <p>
        On GigBlog you can read reviews and reflections on rock and metal gigs
        of all sizes around the UK and occasionally elsewhere, and we also cover
        multiple festivals every year.
      </p>

      <p>
        Use the links at the bottom of the screen to navigate and head over to
        the blog. From there you can filter and sort posts to help you find what
        you&APOS;re looking for more easily. You can then select any post to
        view comments relatign to it and even leave your own.
      </p>

      <p>Want to contribute to GigBlog?</p>
      <p>Let us know at contribute@gigblog.com</p>
    </div>
  );
}
