import { useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export function Series() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col flex-1 lg:flex-row">
        {slug ? (
          <Video episodeSlug={slug} />
        ) : (
          <div className="flex-1 bg-zinc-900" />
        )}
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
