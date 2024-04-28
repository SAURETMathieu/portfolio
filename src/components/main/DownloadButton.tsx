import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { UploadIcon } from "../icons/UploadIcon";

const DownloadButton = () => {
  const t = useTranslations("DownloadButton");

  const handleDownload = async () => {
    try {
      const response = await fetch("./docs/SAURET_Mathieu_CV.pdf");
      if (!response.ok) {
        throw new Error(
          t("toastError")
        );
      }

      const blob = await response.blob();

      const fileUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "SAURET_Mathieu_CV.pdf";

      link.click();
      toast.success(t("toastSuccess"));
      URL.revokeObjectURL(fileUrl);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <button
      aria-label={t("ariaLabel")}
      onClick={handleDownload}
      title={t("ariaLabel")}
      className="hover:ring-ring hover:ring-offset-2 cursor-pointer dark:ring-offset-black rounded-full ring-2 bg-primary max-w-52 w-1/2 mt-4 mb-2 p-2 gap-2 mx-auto flex items-center justify-center text-white group"
    >
      <UploadIcon
        width={18}
        height={18}
        className="group-hover:animate-[bounce_1s_linear_infinite]"
      />
      {t("text")}
    </button>
  );
};

export default DownloadButton;
