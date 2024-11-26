
import Image from "next/image";
import Link from "next/link";
import brandLogo from '@/assets/footerLogo.png'
import { FacebookIcon, LinkedinIcon, XIcon } from "@/assets/icons";
import Container from "@/Components/UI/Container";

const Footer = () => {
    return (
        <footer>
            <div className="bg-black py-10">
                <Container>
                    {/* Brand and subscribe section */}
                    <div className="flex flex-col lg:flex-row lg:gap-20 gap-10">
                        <div className="mb-7">
                            <Link href="/">
                                <Image src={brandLogo} alt="Logo" width={150} height={40} />
                            </Link>
                            <p className="text-white mt-5">
                                Saepe quo suscipit vitae quia. Repudiandae nobis quis. <br />
                                Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est
                                consectetur maxime quos fugit velit assumenda est.
                            </p>
                        </div>

                        <div className="text-white">
                            <h2 className="text-xl font-bold">
                                Sign Up For Our Newsletter!
                            </h2>
                            <p className="mt-2 mb-5">
                                Get notified about updates and be the first to get early access to
                                new Podcast episodes.
                            </p>
                            <div className="bg-transparent border border-gray-800 flex rounded-lg">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full outline-none rounded-l-lg text-black bg-[#F4F8FF] p-4 "
                                />
                                <button
                                    type="button"
                                    className="bg-[#7E53D4] rounded-r-lg px-5 py-2.5"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Info section */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 mt-10 text-white">
                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="#">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="#">support@we5ive.com</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="#">About Us</Link>
                                </li>
                                <li>
                                    <Link href="#">Contact Us</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="#">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-bold mb-4">Social Links</h2>
                            <ul className="flex space-x-4">
                                <li>
                                    <Link href="#">
                                        <FacebookIcon />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <XIcon />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <LinkedinIcon />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="py-4 bg-[#7E53D4] flex justify-center items-center">
                <p className="text-white">© {new Date().getFullYear()} | We5ive</p>
            </div>
        </footer>



    );
};

export default Footer;