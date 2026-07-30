'use client';

import { useCallback, useState } from 'react';
import type { PortfolioItem } from '@/lib/portfolio';

interface UseModalReturn {
  isOpen: boolean;
  currentItem: PortfolioItem | null;
  openModal: (item: PortfolioItem) => void;
  closeModal: () => void;
}

export function useModal(): UseModalReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<PortfolioItem | null>(null);

  const openModal = useCallback((item: PortfolioItem) => {
    setCurrentItem(item);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setCurrentItem(null);
  }, []);

  return { isOpen, currentItem, openModal, closeModal };
}
