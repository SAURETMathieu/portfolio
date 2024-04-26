"use client";

import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import config from "../../../next.config.mjs";
import { LoadIcon } from "../icons/LoadIcon";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  lastname: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
  firstname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  number: z.string(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      number: "",
      email: "",
      message: "",
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const response = await fetch(config.basePath + "/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Message envoyé avec succès.");
        form.reset();
      } else {
        toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
        throw new Error(`Response status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleReset() {
    toast.success("Formulaire supprimé");
    form.reset();
  }

  return (
    <section
      id="contact"
      className="w-full max-w-screen-lg text-center my-32 mx-auto"
    >
      <h3 className="text-3xl lg:text-4xl font-bold mb-6">CONTACT</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 card p-4 rounded border shadow shadow-ring border-ring bg-accent/60"
        >
          <div className="flex flex-wrap space-y-2 sm:space-y-0 justify-between">
            <div className="w-full sm:w-[48%]">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prénom</FormLabel>
                    <FormControl className="hover:ring-1">
                      <Input placeholder="Indiquez votre prénom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full sm:w-[48%]">
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl className="hover:ring-1">
                      <Input placeholder="Indiquez votre nom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex flex-wrap space-y-2 sm:space-y-0 justify-between">
            <div className="w-full sm:w-[48%]">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl className="hover:ring-1">
                      <Input
                        placeholder="Sur quelle adresse dois-je répondre ?"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full sm:w-[48%]">
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone</FormLabel>
                    <FormControl className="hover:ring-1">
                      <Input placeholder="Téléphone (facultatif)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl className="hover:ring-1">
                  <Textarea placeholder="Votre message ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4 pt-4 justify-center">
            <Button
              onClick={() => handleReset()}
              type="reset"
              aria-label="Effacer le formulaire"
              className="hover:ring-ring hover:ring-offset-2 hover:ring-2"
            >
              Effacer
            </Button>
            <Button
              type="submit"
              className={`${
                isLoading ? "pointer-events-none cursor-not-allowed" : ""
              } hover:ring-ring hover:ring-offset-2 hover:ring-2 gap-2`}
              aria-label="Envoyer le formulaire"
            >
              {isLoading && <LoadIcon size={24} />}
              Envoyer
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
