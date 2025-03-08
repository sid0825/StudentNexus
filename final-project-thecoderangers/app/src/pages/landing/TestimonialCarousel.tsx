import * as React from 'react';
import { Box, Card, CardContent, Typography, Avatar, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTranslation } from 'react-i18next'; // Importing useTranslation


interface Testimonial {
    id: number;
    name: string;
    title: string;
    avatar: string;
    testimonial: string;
}

const testimonials: Testimonial[] = [
    // ... your testimonials here
    { id: 1, name: 'Alice Smith', title: 'Grad Student at NEU', avatar: '/path/to/avatar1.jpg', testimonial: 'Impeccable service. The best place to find accommodation for grad students. 10/10 would recommend ' },
    { id: 2, name: 'Bob Johnson', title: 'Grad Student at BU', avatar: '/path/to/avatar2.jpg', testimonial: 'They made sure that we would get an apartment that we liked and we should view as many apartments as required.  They made the process so seamless that I would recommend them to everyone. Not only did they find a budget-friendly apartment for us, but also they helped us with our preferred location.' },
    { id: 3, name: 'Charlie Lee', title: 'Grad Student at NEU', avatar: '/path/to/avatar3.jpg', testimonial: 'StudentNexus is an excellent team. I was personally dealing with lady assistant in this whole apartment process. She there right from selecting the apartment to signing the lease helping us with every small deals.  She was so patient and understood our preferences perfectly and gave us the right choices to select. ' },
    { id: 4, name: 'Diana Prince', title: 'Grad Student at NEU', avatar: '/path/to/avatar4.jpg', testimonial: ' loved how Stavya is prompt and always there to resolve queries. His optimism and availability is what differentiates him from rest of the brokers. Have already recommended him to more freshers like me. Wish him more success' },
    { id: 5, name: 'Evan Wright', title: 'Grad Student at BU', avatar: '/path/to/avatar5.jpg', testimonial: 'Great service! They personally look after your needs recommend you good properties. We used their services to rent 2 apartments. Highly recommended for grad students!' },
    { id: 5, name: 'Tony Kroos', title: 'Grad Student at BU', avatar: '/path/to/avatar5.jpg', testimonial: 'Great service by StudentNexus, they helped me find an apartment within my given budget ans specifications, Riddhi was very helpful for us in the flat search.' },
    { id: 5, name: 'Leonel MEssi', title: 'Grad Student at NEU', avatar: '/path/to/avatar5.jpg', testimonial: 'They are an amazing team and are willing to sit and discuss with their clients and are willing to explain every thing. I have been looking for an apartment in Boston for over a month and couldnt lock any place. With the help of StudentNexus I was able to get a place within a week. They are fast in giving responces to enquires and always ready to provide support.' },
    // ...other testimonials

];

function TestimonialCarousel() {
    const [activeTestimonial, setActiveTestimonial] = React.useState<number>(0);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { t } = useTranslation(); // Using useTranslation hook

    const handleBack = () => {
        setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleForward = () => {
        // Move forward by one, but don't go beyond the last testimonial that can start a new set of three.
        setActiveTestimonial((prev) => (prev < testimonials.length - 3 ? prev + 1 : prev));
    };


    React.useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            // Ensure the translation does not go beyond the width of all testimonials
            const maxTranslateX = width * (testimonials.length / 3 - 1);
            const translateX = Math.min(activeTestimonial * width, maxTranslateX);
            containerRef.current.style.transform = `translateX(-${translateX}px)`;
        }
    }, [activeTestimonial]);

    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', position: 'relative', width: '100%', px: 3, py: 2 }}>
            <Typography variant="h4" textAlign="center" gutterBottom>
                {t('We love nothing more than happy clients!')}
            </Typography>
            <Box
                ref={containerRef}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    transition: 'transform 0.5s ease-in-out',
                    minHeight: '150px',
                }}
            >
                {testimonials.map((testimonial) => (
                    <Box
                        key={testimonial.id}
                        sx={{
                            minWidth: '33.33%', // Set to 100% to show one testimonial at a time
                            flexShrink: 0,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Card
                            raised
                            sx={{
                                width: '300px', // Adjust the width as needed
                                mb: 2,
                            }}
                        >
                            <CardContent>
                                <Avatar src={testimonial.avatar} sx={{ width: 56, height: 56, mb: 2 }} />
                                <Typography variant="h6">{testimonial.name}</Typography>
                                <Typography variant="subtitle1" color="text.secondary">{testimonial.title}</Typography>
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                    {testimonial.testimonial}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
            <IconButton
                onClick={handleBack}
                disabled={activeTestimonial === 0}
                sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 1 }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
                onClick={handleForward}
                // Disable the forward button if the active testimonial index is such that the last three testimonials are already displayed.
                disabled={activeTestimonial >= testimonials.length - 3}
                sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', zIndex: 1 }}
            >
                <ArrowForwardIosIcon />
            </IconButton>

        </Box>
    );
}

export default TestimonialCarousel;
