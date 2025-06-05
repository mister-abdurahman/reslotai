import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface NicheParams {
  params: {
    niche: string;
  };
}

export default async function Features({ params }: NicheParams) {
  const { niche } = await params;

  return (
    <div className="min-h-screen font-inter">
      <Header path={niche} />
      <main className="mt-30">
        <p className="text-center font-semibold text-blue-900 py-6">
          Features content for niche:{niche}
        </p>
      </main>
      <Footer />
    </div>
  );
}
