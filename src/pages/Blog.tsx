import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogPost {
  id: string;
  titleKey: string;
  excerptKey: string;
  categoryKey: string;
  date: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "office-365-tips",
    titleKey: "blog.post1.title",
    excerptKey: "blog.post1.excerpt",
    categoryKey: "blog.category.productivity",
    date: "2024-11-25",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&h=400&fit=crop",
  },
  {
    id: "windows-11-features",
    titleKey: "blog.post2.title",
    excerptKey: "blog.post2.excerpt",
    categoryKey: "blog.category.os",
    date: "2024-11-20",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1624571409108-e9a41746af53?w=800&h=400&fit=crop",
  },
  {
    id: "azure-cloud-benefits",
    titleKey: "blog.post3.title",
    excerptKey: "blog.post3.excerpt",
    categoryKey: "blog.category.cloud",
    date: "2024-11-15",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
  },
  {
    id: "copilot-productivity",
    titleKey: "blog.post4.title",
    excerptKey: "blog.post4.excerpt",
    categoryKey: "blog.category.ai",
    date: "2024-11-10",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  },
  {
    id: "teams-collaboration",
    titleKey: "blog.post5.title",
    excerptKey: "blog.post5.excerpt",
    categoryKey: "blog.category.productivity",
    date: "2024-11-05",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  },
  {
    id: "security-best-practices",
    titleKey: "blog.post6.title",
    excerptKey: "blog.post6.excerpt",
    categoryKey: "blog.category.security",
    date: "2024-10-30",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=400&fit=crop",
  },
];

const Blog = () => {
  const { t, language } = useLanguage();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              {t("blog.badge")}
            </span>
            <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {t("blog.title")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
              {t("blog.description")}
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <article className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:shadow-card-hover">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={t(blogPosts[0].titleKey)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {t(blogPosts[0].categoryKey)}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t("blog.featured")}
                    </span>
                  </div>
                  <h2 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">
                    {t(blogPosts[0].titleKey)}
                  </h2>
                  <p className="mb-6 text-muted-foreground line-clamp-3">
                    {t(blogPosts[0].excerptKey)}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {formatDate(blogPosts[0].date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime} {t("blog.readTime")}
                    </span>
                  </div>
                  <button className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80">
                    {t("blog.readMore")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:border-primary/20"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={t(post.titleKey)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-card/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary">
                      {t(post.categoryKey)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 font-display text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {t(post.titleKey)}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                    {t(post.excerptKey)}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
