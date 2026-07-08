import Carteira from "../../../../pages/Carteira/Carteira";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function Page({ params }: PageProps) {
    const { id } = await params;

    return <Carteira id={Number(id)} />;
}