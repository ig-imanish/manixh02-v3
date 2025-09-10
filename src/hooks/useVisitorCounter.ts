import { useEffect, useState } from 'react';
import { trackVisitor } from '../firebase/visitorService';

// visitor tracking
export const useVisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const initializeVisitorCount = async () => {
      try {

        const count = await trackVisitor();
        setVisitorCount(count);
        setLoading(false);

      } catch (error) {
        console.error('Failed to track visitor:', error);
        setLoading(false);
      }
    };

    initializeVisitorCount();
  }, []);

  return { visitorCount, loading };
};