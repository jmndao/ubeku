import Image from "next/image";
import React from "react";
import ContactForm from "../../components/Form/Contact";
import Layout from "../../components/Layout/Home";

import ImageContact from "../../images/contact/contact.jpg";

const Contact = () => {
  return (
    <Layout>
      {/* Landing Image */}
      <div className="relative h-[340px] md:h-[420px] lg:h-[660px] rounded-sm">
        <Image
          src={ImageContact}
          layout="fill"
          objectFit="cover"
          alt={"Nos Productions"}
          className="w-full h-full rounded-sm"
        />
        <div className="absolute h-1/2 bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-200 via-zinc-200/60 dark:from-zinc-900 dark:via-zinc-900/60 to-transparent">
          <div className="w-8/12 h-full mx-auto backdrop-blur-sm bg-zinc-200/60 dark:bg-zinc-900/60 rounded-sm p-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
