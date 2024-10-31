import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background-color: #d0c9f1;
  text-align: center;
  color: #333;
`;

const Header = styled.header`
  padding: 2rem 0;

  img {
    width: 100%;
    max-width: 500px; /* Maintain max size on larger screens */
    height: auto; /* Maintain aspect ratio */
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
  background-color: #fff;

  a {
    font-size: 1.2rem;
    color: #333;
    text-decoration: none;
  }
`;

const ContentBox = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  margin: 1rem auto;
  width: fit-content;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const EventBookingBox = styled.div`
  background-color: #fff;
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: fit-content;
  max-width: 800px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Address = styled.p`
  margin-top: 1rem;
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  text-align: center;
  max-width: 600px; /* Limits width for better readability */
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.section`
  margin: 2rem 0;
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const CalendarBox = styled.div`
  background-color: #e0e0e0;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 1rem;

  iframe {
    width: 100%;
    max-width: 800px;
    height: 600px;
    @media (max-width: 768px) {
      height: 400px; /* Reduce height on smaller screens */
    }
  }
`;

const Footer = styled.footer`
  margin-top: 2rem;
  padding: 1rem;
  color: #333;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>The Art Pod at Roots Cafe</title>
      </Head>

      <Header>
        <Image
          src="/header-logo.png"
          alt="The Art Pod at Roots Cafe Logo"
          width={500}
          height={150}
        />
      </Header>

      <Nav>
        <a href="#activities">Activities</a>
        <a href="#book-private-event">Book Private Event</a>
        <a href="#info">Info</a>
      </Nav>

      <main>
        <ContentBox>
          <h2>Fine Arts and Crafts Explorations for Children and Adults</h2>
          <Address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=84+Herbert+Ave,+Closter,+NJ+07624"
              target="_blank"
              rel="noopener noreferrer"
            >
              84 Herbert Ave, Closter, NJ 07624
            </a>
          </Address>
          <Description>
            At The Art Pod, We Believe We are all Creators in our souls. Here we
            provide space to experiment and exercise creativity and curiosity
            that exists within each and every one of us.
          </Description>
        </ContentBox>

        <Section id="activities">
          <h2>Art Pod Schedule</h2>
          <CalendarBox>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=theartpodnj@gmail.com&ctz=America/New_York"
              style={{ border: 0 }}
              width="800"
              height="600"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </CalendarBox>
        </Section>

        <EventBookingBox id="book-private-event">
          <SectionTitle>Book Private Creative Events with Us!</SectionTitle>
          <p>
            For all occasions: birthday parties, bridal showers, casual
            Tuesdays.
          </p>
          <br></br>
          <p>
            <strong>You dream it, we help create it!</strong>
          </p>
          <p>Roots Cafe Food Catering Available!</p>
          <br></br>
          <p>
            <strong>Email:</strong> theartpodnj@gmail.com
          </p>
        </EventBookingBox>

        <Footer id="info">
          <p>84 Herbert Avenue, Closter NJ</p>
          <p>theartpodnj@gmail.com</p>
          <a href="http://www.rawrootscafe.com">www.rawrootscafe.com</a>
        </Footer>
      </main>
    </Container>
  );
}
