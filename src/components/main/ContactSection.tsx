"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { LoadIcon } from "../icons/LoadIcon";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  const t = useTranslations("ContactSection");

  const formSchema = z.object({
    lastname: z.string().min(2, {
      message: t("formLastnameError"),
    }),
    firstname: z.string().min(2, {
      message: t("formFirstnameError"),
    }),
    email: z.string().email({
      message: t("formEmailError"),
    }),
    number: z.string(),
    message: z.string().min(10, {
      message: t("formMessageError"),
    }),
  });

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
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success(t("toastSuccess"));
        form.reset();
      } else {
        toast.error(t("toastError"));
        throw new Error(`Response status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleReset() {
    toast.success(t("toastReset"));
    form.reset();
  }

  return (
    <section
      id="contact"
      className="w-full max-w-screen-lg text-center my-32 mx-auto"
    >
      <h3 className="text-3xl lg:text-4xl font-bold mb-6">{t("title")}</h3>
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
                    <FormLabel>{t("formFirstnameLabel")}</FormLabel>
                    <FormControl className="hover:ring-1">
                      <Input
                        placeholder={t("formFirstnamePlaceholder")}
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
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("formLastnameLabel")}</FormLabel>
                    <FormControl className="hover:ring-1">
                      <Input
                        placeholder={t("formLastnamePlaceholder")}
                        {...field}
                      />
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
                    <FormLabel>{t("formEmailLabel")}</FormLabel>
                    <FormControl className="hover:ring-1">
                      <Input
                        placeholder={t("formEmailPlaceholder")}
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
                    <FormLabel>{t("formPhoneLabel")}</FormLabel>
                    <FormControl className="hover:ring-1">
                      <Input
                        placeholder={t("formPhonePlaceholder")}
                        {...field}
                      />
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
                <FormLabel>{t("formMessageLabel")}</FormLabel>
                <FormControl className="hover:ring-1">
                  <Textarea
                    placeholder={t("formMessagePlaceholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4 pt-4 justify-center">
            <Button
              onClick={() => handleReset()}
              type="reset"
              aria-label={t("formResetAria")}
              className="hover:ring-ring hover:ring-offset-2 hover:ring-2"
            >
              {t("formResetText")}
            </Button>
            <Button
              type="submit"
              className={`${
                isLoading ? "pointer-events-none cursor-not-allowed" : ""
              } hover:ring-ring hover:ring-offset-2 hover:ring-2 gap-2`}
              aria-label={t("formSubmitAria")}
            >
              {isLoading && <LoadIcon size={24} />}
              {t("formSubmitText")}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
