import { NextSeo }          from "next-seo";

export default function Head() {

    const meta = {
        description: 'Genom att ta reda på användarnas behov, beteenden och drivkrafter kan vi designa digitala upplevelser som lyfter din affär på riktigt. Läs om våra erbjudanden.',
        openGraph: {
            type: 'website',
            url: 'https://www.minabastapolare.se/tjanster/tjanstedesign-och-innovation',
            title: 'Tjänstedesign och Innovation | Mina Bästa Polare',
            description: 'Genom att ta reda på användarnas behov, beteenden och drivkrafter kan vi designa digitala upplevelser som lyfter din affär på riktigt. Läs om våra erbjudanden.',
            images: [
                {
                    url: 'https://www.minabastapolare.se/img/meta/mina-basta-polare.jpg',
                    width: 1200,
                    height: 760,
                    type: 'image/jpg',
                    secureUrl: 'https://www.minabastapolare.se/img/meta/mina-basta-polare.jpg',
                },
            ],
        },
    };

    return (
        <>
            <title>Tjänstedesign och Innovation | Mina Bästa Polare</title>
            <NextSeo {...meta} useAppDir={true} />
        </>
    );
}
