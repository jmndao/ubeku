import React from "react";
import { Input, Textarea } from "@nextui-org/react";
import { Send } from "react-feather";

const ContactForm = () => {
  return (
    <div className="w-full h-auto p-4">
      <div className="w-full flex flex-col items-center justify-start space-y-9 mt-6">
        <Input
          underlined
          labelPlaceholder="Nom Complet"
          color="secondary"
          name="fullName"
          fullWidth={true}
          className="text-zinc-200 dark:text-zinc-900"
        />
        <Input
          underlined
          labelPlaceholder="Email"
          color="secondary"
          name="email"
          fullWidth={true}
        />
        <Textarea
          underlined
          color="secondary"
          name="message"
          labelPlaceholder="Votre Message"
          fullWidth={true}
        />
      </div>
      {/* Send Button */}
      <div className="w-full h-auto flex items-center justify-center mt-9 mb-4">
        <div className="flex items-center justify-center space-x-3 text-zinc-200 dark:text-zinc-900 font-light w-fit px-6 py-2 text-lg bg-zinc-900 dark:bg-zinc-200 hover:bg-violet-700 dark:hover:bg-violet-700 hover:text-white dark:hover:text-white transition-all rounded-sm cursor-pointer duration-200">
          <span>Envoyer</span>
          <Send size={24} className="text-inherit" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
