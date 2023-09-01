import { NextSeo }          from "next-seo";

export default function Head() {

    const meta = {
        description: 'Moderna digitala plattformar utgör basen för god kommunikation, både externt och internt. Tex vid försäljning, uthyrning, streaming, certifiering, utbildning etc.',
        openGraph: {
            type: 'website',
            url: 'https://www.minabastapolare.se/erbjudande/digitala-plattformar',
            title: 'Digitala plattformar | Mina Bästa Polare',
            description: 'Moderna digitala plattformar utgör basen för god kommunikation, både externt och internt. Tex vid försäljning, uthyrning, streaming, certifiering, utbildning etc.',
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
            <title>Digitala plattformar | Mina Bästa Polare</title>
            <NextSeo {...meta} useAppDir={true} />
        </>
    );
}
