import Head from "next/head";
import Image from "next/image";
const DATA_URL = "https://gist.githubusercontent.com/manoharglm/4de4f3cf91c4f90cc73b5776c6380c6d/raw/";

export async function getStaticProps() {
  try {
    const res = await fetch(DATA_URL);
    const data = await res.json();
    return {
      props: { userData: data },
    };
  } catch (error) {
    console.error(error);
    return { props: { userData: null } };
  }
}


const Home = ({ userData }) => {
  if (!userData) return <p className="error">Failed to load data</p>;

  const { body, profile, experiences, links } = userData;
  if (!body || !profile || !experiences || !links)
    return <p className="error">Data is incomplete</p>;

  const { about } = body;
  const { firstName, lastName, title } = profile;

  return (
    <div className="container">
      <Head>
        <title>Senior Frontend Developer | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <div className="profile">
          <Image
            className="profile-picture"
            src="https://uflt4z7qv9.ufs.sh/f/zNsYRJ7pFeiQjbhxJVgE3INtnPu18ydWx4vacsweLkrlXmTV"
            alt="Profile Picture"
            width={500}
            height={500}
          />
          <div className="profile-container">
            <p className="big-header">{firstName + " " + lastName}</p>
            <p className="text">{title}</p>
            <a
              className="profile-link text"
              href="https://manoharglm.github.io/"
            >
              manoharglm.github.io
            </a>
          </div>
        </div>
        <p className="header">About</p>
        <p className="text">{about}</p>
        <section>
          <p className="header">Work Experience</p>
          {experiences.map((experience) => {
            return (
              <div key={experience.company} className="job">
                <p className="text">
                  {experience.startDate} - {experience.endDate}
                </p>
                <p className="sub-header">
                  {experience.title} - {experience.company}
                </p>
                <ul className="description-list">
                  {experience.description.map((item) => (
                    <li key={item} className="text">{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>
        <div className="links">
          {Object.keys(links).map((site) => (
            <a key={site} href={links[site]} target="_blank" rel="noopener noreferrer">
              {site}
            </a>
          ))}
        </div>
      </>
    </div>
  );
};

export default Home;
