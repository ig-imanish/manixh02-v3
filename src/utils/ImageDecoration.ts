export interface DecorationImage {
    filename: string;
    name: string;
    description: string;
    dayIndex: number; // 0 = Sunday, 1 = Monday, etc.
}

// Array of decoration images for each day of the week
export const decorationImages: DecorationImage[] = [
    {
        filename: "soul_leaving_body.png",
        name: "Soul Leaving Body",
        description: "Sunday vibes - existential crisis mode",
        dayIndex: 0, // Sunday
    },
    {
        filename: "cyber_katana.png",
        name: "Cyber Katana",
        description: "Monday motivation - ready to slice through code",
        dayIndex: 1, // Monday
    },
    {
        filename: "candlelight_dark.png",
        name: "Candlelight Dark",
        description: "Tuesday focus - burning the midnight oil",
        dayIndex: 2, // Tuesday
    },
    {
        filename: "cyber_katana.png",
        name: "cyber_katana",
        description: "Wednesday weirdness - reality.exe has stopped working",
        dayIndex: 3, // Wednesday
    },
    {
        filename: "candlelight_dark.png",
        name: "candlelight_dark",
        description: "Thursday thinking - deep debugging mode",
        dayIndex: 4, // Thursday
    },
    {
        filename: "shy.png",
        name: "Shy",
        description: "Friday flow - in the zone",
        dayIndex: 5, // Friday
    },
    {
        filename: "blossomburst.png",
        name: "Blossom Burst",
        description: "Saturday style - weekend vibes activated",
        dayIndex: 6, // Saturday
    }
];

/**
 * Get decoration image based on current day of the week
 * @returns DecorationImage object for today
 */
export const getTodaysDecoration = (): DecorationImage => {
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    return decorationImages[today];
};

/**
 * Get decoration image based on specific day
 * @param dayIndex Day of week (0-6, where 0 is Sunday)
 * @returns DecorationImage object for specified day
 */
export const getDecorationByDay = (dayIndex: number): DecorationImage => {
    const validDayIndex = Math.max(0, Math.min(6, dayIndex));
    return decorationImages[validDayIndex];
};

/**
 * Get decoration filename with environment variable override
 * Priority: ENV variable > Today's decoration > Default fallback
 * @returns string filename of the decoration image
 */
export const getDecorationFilename = (): string => {
    // Check for environment variable override first
    const envImage = import.meta.env.VITE_DECORATION_IMAGE;
    if (envImage && typeof envImage === 'string' && envImage.trim() !== '') {
        return envImage;
    }

    // Fall back to today's decoration
    return getTodaysDecoration().filename;
};

/**
 * Get all available decoration images
 * @returns Array of all DecorationImage objects
 */
export const getAllDecorations = (): DecorationImage[] => {
    return decorationImages;
};

/**
 * Get decoration by filename
 * @param filename The filename to search for
 * @returns DecorationImage object if found, otherwise today's decoration
 */
export const getDecorationByFilename = (filename: string): DecorationImage => {
    const found = decorationImages.find(img => img.filename === filename);
    return found || getTodaysDecoration();
};

/**
 * Get day name from day index
 * @param dayIndex Day of week (0-6)
 * @returns Day name as string
 */
export const getDayName = (dayIndex: number): string => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex] || 'Unknown';
};

/**
 * Check if image file exists (for fallback handling)
 * @param filename The image filename to check
 * @returns Promise<boolean> indicating if image exists
 */
export const checkImageExists = async (filename: string): Promise<boolean> => {
    try {
        const response = await fetch(`/${filename}`, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
};

/**
 * Get decoration with fallback logic
 * @returns Promise<string> filename that definitely exists
 */
export const getDecorationWithFallback = async (): Promise<string> => {
    const primaryImage = getDecorationFilename();

    // Check if primary image exists
    const primaryExists = await checkImageExists(primaryImage);
    if (primaryExists) {
        return primaryImage;
    }

    // Try today's decoration
    const todaysImage = getTodaysDecoration().filename;
    const todaysExists = await checkImageExists(todaysImage);
    if (todaysExists) {
        return todaysImage;
    }

    // Final fallback - try each image until we find one that exists
    for (const decoration of decorationImages) {
        const exists = await checkImageExists(decoration.filename);
        if (exists) {
            return decoration.filename;
        }
    }

    // Ultimate fallback - return the first image filename even if it doesn't exist
    return decorationImages[0].filename;
};

// Export default decoration for easy import
export default {
    getTodaysDecoration,
    getDecorationByDay,
    getDecorationFilename,
    getAllDecorations,
    getDecorationByFilename,
    getDayName,
    checkImageExists,
    getDecorationWithFallback,
    decorationImages
};
