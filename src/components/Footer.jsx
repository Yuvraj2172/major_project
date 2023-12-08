import { Footer } from "flowbite-react";

export default function Component() {
  return (
    <Footer>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <p>
            SharkTank <span className="text-blue-500">Analysis</span>
          </p>

          <Footer.LinkGroup className="flex space-x-5">
            <Footer.Link href="#">Home</Footer.Link>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Projects</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="SharkTank" year={2023} />
      </div>
    </Footer>
  );
}
