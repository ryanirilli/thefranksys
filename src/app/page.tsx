import {
  Box,
  Alert,
  AlertIcon,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import AddressComponent from "./Address";

import Image from "next/image";

const sectionProps = {
  mb: 8,
};

export default function Home() {
  return (
    <Box as="main" mb="64">
      <Container maxW="container.lg">
        <Box as="section" {...sectionProps}>
          <Container my={8}>
            <Image
              layout="responsive"
              src="/andrew-hero.png"
              alt="Andrew"
              width={801}
              height={692}
            />
          </Container>
          <Container>
            <Text {...sectionProps}>
              Gentlemen, prepare to embark on an epic adventure that will go
              down in the annals of bachelor party history! This isn't just any
              weekend getaway; it's the legendary celebration of Andrew Franks'
              last days of bachelorhood, and you're all critical members of this
              monumental occasion.
            </Text>

            <Text {...sectionProps}>
              Picture this: The city of Tacoma WA, known for its vibrant energy
              and stunning views, is about to witness an invasion like no other.
              It's Friday night, our chariot for the evening? A luxurious party
              bus, decked out with all the neon lights and house music one could
              dream of. This isn't just a mode of transport; it's the rolling
              epicenter of our festivities, where the party kicks off and never
              stops.
            </Text>

            <Text {...sectionProps}>
              But wait, there's more! What's a gathering of friends without a
              little friendly competition? Get ready to lace up your J's and hit
              the court for a basketball tournament that will pit your athletic
              abilities against your guaranteed hangover. Whether you're
              shooting threes like Curry or getting punched in the face like
              Poole, it's all about the winning by any means necessary.
            </Text>

            <Text {...sectionProps}>
              And as the sun sets on Saturday, we're not slowing down. We've got
              an Argentine chophouse on the horizon that will tantalize your
              taste buds and satisfy even the most discerning carnivore. Picture
              the finest cuts, grilled to perfection, shared among friends as we
              toast to Andrew's upcoming nuptials.
            </Text>

            <Text {...sectionProps}>
              Our Airbnb will become the ultimate party headquarters, a
              sanctuary where we can let loose, share laughs, and make memories
              that will last a lifetime. From spontaneous dance-offs to
              late-night heart-to-hearts, these are the moments we'll look back
              on and cherish.
            </Text>

            <Text {...sectionProps}>
              So, get ready, pack your bags, and prepare for a weekend of
              non-stop fun. This weekend is more than just a celebration; it's a
              testament to bromanship, love, and the beginning of a new chapter.
              Let's make it unforgettable!
            </Text>
          </Container>
        </Box>
        <Heading as="h1" size="2xl" mb="4" textAlign="center">
          Schedule
        </Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  Location
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Text maxWidth="600px" mb={8}>
                We'll checkin to the AirBnB Friday morning to setup so all are
                welcome to join as soon as you're ready to start raging, but the
                <strong> official start time is 5pm</strong>
              </Text>
              <AddressComponent />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  Friday
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Text mb={4}>
                We'll get things rolling at the AirBnB Friday morning. For
                anyone planning on joining early, we'll likely hit a brewery for
                lunch or possibly{" "}
                <a href="https://stadiumgolftacoma.com/" target="_blank">
                  Stadium Golf
                </a>{" "}
                during the day. We'll be back at the AirBnB by 5pm for the
                offical kickoff.
              </Text>
              <Heading as="h3" size="md">
                Party Bus, 8pm
              </Heading>
              <Text maxWidth="600px" my={4}>
                <strong>Please bring $10 in cash</strong> to contirbute to the
                driver's gratuity
              </Text>
              <UnorderedList>
                <ListItem>Pickup at 8pm</ListItem>
                <ListItem>End at 12am</ListItem>
                <ListItem>
                  Locations
                  <UnorderedList>
                    <ListItem>Java Jive</ListItem>
                    <ListItem>TBD</ListItem>
                    <ListItem>Parkway Tavern</ListItem>
                    <ListItem>Titlow Park</ListItem>
                    <ListItem>Club Silverstone</ListItem>
                    <ListItem>Last stop - Emerald Queen Casino</ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
              <Alert status="info" bg="whiteAlpha.200" my={8} borderRadius={4}>
                <AlertIcon />
                Plan on taking rideshare back to the AirBnB from the casino
              </Alert>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  Saturday
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Text mb={4}>
                It'll be a late start to the day, but we'll have breakfast food,
                coffee, and mimosas at the AirBnB to help shakeoff any hangover
                energy. We'll be heading to the basketball court around 1pm.
              </Text>
              <Heading as="h3" size="md" mb={4}>
                Basketball Tournament, 1pm
              </Heading>
              <UnorderedList>
                <ListItem>Teams have been selected at random</ListItem>
                <ListItem>
                  All teams except the widcard team will play in Round 1
                </ListItem>
                <ListItem>
                  The wildcard team will be selected by being the first team to
                  make a 3pt shot at the beginning of the tournament
                </ListItem>
              </UnorderedList>
              <Box mt={8}>
                <Image
                  src="/Bracket.png"
                  alt="Andrew"
                  layout="responsive"
                  width={2512}
                  height={2222}
                />
              </Box>
              <Heading as="h3" size="md" mt={16} mb={4}>
                Dinner at Asado, 7pm
              </Heading>
              <Text mb={4}>
                <a href="https://www.asadotacoma.com/" target="_blank">
                  Asado
                </a>{" "}
                in Tacoma is an Argentine-themed steakhouse known for its
                mesquite grilled steaks, premium cocktails, and stunning
                seafood. It offers a convivial atmosphere reminiscent of an
                Argentine grill party, with a social setting featuring a chef's
                table and bench booth seating. The restaurant's interior
                combines metalwork and deep-hued wood, creating a rustic urban
                palette. It has a flavor-forward menu in the vibrant Sixth
                Avenue dining district location.
              </Text>
              <Image
                src="/asado.jpg"
                alt="asado"
                layout="responsive"
                width={2500}
                height={1674}
              />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  );
}
