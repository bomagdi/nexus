import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="max-padd-container pt-[99px]">
      <div className="max-padd-container bg-hero bg-center bg-cover bg-no-repeat h-[655px] w-full rounded-3xl ">
        <div className="relative top-32 xs:top-52">
          <span className="medium-18">Welcome to Nexus</span>
          <h1 className="h1 capitalize max-w-[40rem]">
            Where Homes and Dreams Meet
          </h1>
          <p className="my-10 max-w-[33rem]" >
            Nexus connects you to your dream home with expert guidance,
            personalized service, and innovative solutions for seamless real
            estate experiences.
          </p>
          {/* buttons */}
          <div className="inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl">
            <div className="text-center regular-14 leading-tight pl-5">
              <h5 className="uppercase font-bold">10% off</h5>
              <p className="regular-14 capitalize">on all projects</p>
            </div>
            <Link to="/projects" className="btn-secondary rounded-xl flexCenter !py-5">Shop now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
