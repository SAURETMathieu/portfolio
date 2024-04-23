import React from "react";
import { useEffect } from "react";
import { BurgerIcon } from "../icons/BurgerIcon";
import { CrossIcon } from "../icons/CrossIcon";

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function BurgerMenu({ isOpen, setIsOpen }: BurgerMenuProps) {
  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={toggleMenu}>
      {isOpen ? (
        <CrossIcon size={24} className="" aria-label="Fermer le menu" />
      ) : (
        <BurgerIcon size={24} className="" aria-label="Ouvrir le menu" />
      )}
    </button>
  );
}

export default BurgerMenu;
