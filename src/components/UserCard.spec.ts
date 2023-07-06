import { render, screen } from "@testing-library/svelte";
import type { ComponentProps } from "svelte";
import UserCard from "./UserCard.svelte";

const SingleUser: User = {
    name: "Dmitry Lambrianov",
    email: "dmitry.lambrianov@tretton37.com",
    phoneNumber: "+46761337187",
    office: "Stockholm",
    manager: "christoffer.hydling@tretton37.com",
    orgUnit: "/Employees",
    mainText: "<p>Since my early childhood, I've had strong feelings about computers and technology. I was very lucky to punch in my first code into a C64 at a very early age (I think it was an Arkanoid game) which provoked a lifelong interest.</p><p>The road to establishing tech as my profession was not easy but it's a very rewarding experience that allows me to better understand the world around me, connect with brilliant people and work on interesting projects every day.</p> <p>Everything I know about learning comes from my obsession with playing guitar. When I'm not coding or sleeping, I am usually recording guitar sketches or composing music. When I have a chance, I love visiting new places, especially those rich in nature, however, I also have a passion for discovering smaller live music venues in big cities when following my favorite bands.</p>",
    gitHub: "obzenner",
    twitter: "dima_lambrianov",
    stackOverflow: "1094406",
    linkedIn: "/in/dmitry-lambrianov-1b280720/",
    imagePortraitUrl: "https://i.1337co.de/profile/dmitry-lambrianov",
    imageWallOfLeetUrl: "https://i.1337co.de/wallofleet/dmitry-lambrianov",
    highlighted: false,
    published: true,
    primaryRole: "Backend",
    secondaryRole: "Frontend",
    area: "Engineering"
}

describe("UserCard", async () => {
    it("Name is in the UserCard", async () => {
        render(UserCard, { userInfo: SingleUser });
		expect(screen.queryByText("Dmitry Lambrianov")).toBeInTheDocument();
    });

    it("Location is in the UserCard", async () => {
        render(UserCard, { userInfo: SingleUser });
		expect(screen.queryByText("Stockholm")).toBeInTheDocument();
    });
})