

import styles from "./page.module.scss";

const page = () => {
  return (
    <div className="contain">
      <div className={styles.main}>
        <h1 className={styles.title}>
          About Our <span className={styles.colorOrange}>Gharana</span>
        </h1>
        <div className={styles.section}>
        <div className={styles.hbox}>
          <div className={styles.hbox}>
          <h2 className={styles.subtitle}>
            Birth of the <span className={styles.colorOrange}>idea</span>
          </h2>
          </div>
          </div>
          <div className={styles.parablock}>
            <p className={styles.para}>
              When was the last time you danced to your favourite tune?
            </p>
            <p className={styles.para}>
              When was the last time you jammed with your buddies?tune?
            </p>
            <p className={styles.para}>
              When was the last time your brush touched the canvas?
            </p>
            <p className={styles.para}>
              One evening over tea, two friends found themselves asking the same
              questions. Having bonded over art for 15 long years, they had
              suddenly found themselves trapped in the maze of a busy life. It
              was in that moment that the idea of Art Gharana took birth.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.hbox}>
            <h2 className={styles.subtitle}>
              Who are <span className={styles.colorOrange}>we</span>
            </h2>
          </div>
          <div className={styles.parablock}>
            <p className={styles.para}>
              Early childhood is the best time to embark on a journey of
              learning. A child learns to draw before it learns to write.
              Children today are born into technology and for the lack of the
              right opportunity at the right time end up spending all their
              precious years on tablets and laptops.Art appeals to the senses.
              Learning an art form brings one closer to the natural world, a
              much needed respite in the modern era of robots and microchips.
              Art sets the mind free, and once one comes in touch with one’s
              senses, there is no limit to the feats achievable. We at Art
              Gharana bring the world closer to art. We provide individual
              training in art forms by highly trained and accomplished teachers
              and art practitioners, a platform to individuals for training in
              an art form of their choice.
            </p>
          </div>
        </div>
        <div className={styles.section}>
        <div className={styles.hbox}>
          <h2 className={styles.subtitle}>
            What’s in a <span className={styles.colorOrange}>name</span>
          </h2>
          </div>
          <div className={styles.parablock}>
            <p className={styles.para}>
              India has had a long tradition of Gharanas of dance and music.
              Back in the day, evenings would be spent singing and dancing
              within communities. We provide an opportunity to connect with the
              roots of Indian culture, with an added advantage of exploring arts
              forms from round the globe. Art forms that are generally deemed
              reserved for a certain section of individuals, available for every
              enthusiast, every learner. An Art Gharana for all.
            </p>
          </div>
        </div>
        <div className={styles.section}>
        <div className={styles.hbox}>
          <h2 className={styles.subtitle}>
            What’s on <span className={styles.colorOrange}>offer</span>
          </h2>
          </div>
          <div className={styles.parablock}>
            <p className={styles.para}>
              From music to dance, from photography to painting, we bring to you
              a diverse range of art forms under a single roof. Undivided
              attention to each student, with a one-on-one training structure,
              as we make sure each class is disruption-free. Classes conducted
              in 100% live sessions, by teachers with years of experience of in
              person and online teaching.
            </p>
          </div>
        </div>
        {/* <div className={styles.section}>
          <h2 className={styles.subtitle}>Birth of the idea</h2>
          <div className={styles.parablock}>
          <p className={styles.para}>
          </p>
          </div>
          </div> */}
      </div>
    </div>
  );
};

export default page;
