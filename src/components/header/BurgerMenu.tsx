import { useTranslations } from "next-intl";
import React from "react";
import { BurgerIcon } from "../icons/BurgerIcon";
import { CrossIcon } from "../icons/CrossIcon";

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function BurgerMenu({ isOpen, setIsOpen }: BurgerMenuProps) {
  const t = useTranslations("BurgerMenu");

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={toggleMenu}>
      {isOpen ? (
        <CrossIcon size={24} className="" aria-label={t("ariaOpen")} />
      ) : (
        <BurgerIcon size={24} className="" aria-label={t("ariaClose")} />
      )}
    </button>
  );
}

export default BurgerMenu;
