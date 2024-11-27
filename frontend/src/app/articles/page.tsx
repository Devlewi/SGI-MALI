// src/app/articles/page.tsx
import Head from "next/head";
import Image from "next/image";
import styles from "../page.module.css"; // Chemin vers le répertoire parent
import { Metadata } from "next";

type Post = {
  id: number;
  title: { rendered: string };
  link: string;
  featured_media: number; // ID de l'image mise en avant
};

type Media = {
  id: number;
  source_url: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost/sgi/backend/wp-json/wp/v2/posts", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

async function getMedia(mediaId: number): Promise<string> {
  if (!mediaId) return "/placeholder.png"; // Image par défaut
  const res = await fetch(
    `http://localhost/sgi/backend/wp-json/wp/v2/media/${mediaId}`
  );
  if (!res.ok) return "/placeholder.png"; // Image par défaut en cas d'erreur
  const media = (await res.json()) as Media;
  return media.source_url;
}

export const metadata: Metadata = {
  title: "ARTICLES | People237",
  description: "Découvrez nos articles sur People237.",
};


export default async function Articles() {
  const posts = await getPosts();

  // Récupérer les URLs des images en parallèle
  const postsWithImages = await Promise.all(
    posts.map(async (post) => ({
      ...post,
      imageUrl: await getMedia(post.featured_media),
    }))
  );

  return (
    <div className={styles.page}>
      <Head>
        <title>Liste des Articles - People237</title>
        <meta
          name="description"
          content="Découvrez les derniers articles de People237 avec les dernières tendances, actualités et plus encore."
        />
      </Head>
      <h1 className="text-4xl text-center mt-8">Liste des Articles</h1>
      <div className={styles.grid}>
        {postsWithImages.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <Image
              src={post.imageUrl}
              alt={post.title.rendered}
              width={300}
              height={200}
              className={styles.image}
            />
            <h3 className={styles.cardTitle}>{post.title.rendered}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
