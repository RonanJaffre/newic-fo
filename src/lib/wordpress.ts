import type { Article } from "@/types";

const WORDPRESS_API_URL =
  import.meta.env.PUBLIC_WP_API_URL ||
  "https://astrostarterkit.42web.io/wordpress/wp-json/wp/v2";

const tags = ["Bouygues Telecom", "Auvergne-Rhône-Alpes", "Retraite"];
const cover = "/images/articles/coverNews.jpg";
const content = `<p><strong>Culpa iste impedit alias rem at eum porro amet consequatur neque quibusdam facilis ture quod beatae vel exercitationem, veniam libero omnis delectus recusandae molestias saepe.</strong><div class=callout><p class=callout-title>Aenean id nisl vitae mauris placerat pharetra eget vel.<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Suspendisse potenti. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Phasellus ligna.<p>Nullam imperdiet, quam at varius consequat, massa sem iaculis ante, at dictum lacus leo non tortor. Donec pretium vulputate sapien nec sagittis. Integer turpis semper interdum quis ex semper suscipit. Pellentesque eros et leo hendrerit condimentum. Mauris vitae semper proin, ligula facilisis accumsan vel consectetur ante dolor vitae ligula. Duis nec sagittis ligula.</div><h2>Phasellus et pulvinar libero.</h2><p>Morbi ac venenatis justo, sed ipsum malesuada est. Sed quis urna et elit rutrum nulla commodo vitam. Aenean in ex vitae mauris placerat id vel ante. Suspendisse aliquam semper tempor lorem. Integer id rutrum nunc. Phasellus gravida molestie neque, ut ullamcorper dui blandit ac ligula eget placerat. Mauris euismod gravida condimentum. Suspendisse potenti. Phasellus vitae mi nulla. Donec ut velit ut elit bibendum mollis. Mauris ac sem eget dolor scelerisque lobortis pellentesque eros et leo hendrerit condimentum. Aenean ante dolor vitae ligula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et blandit bibendum libero.<p><strong>Etiam eget, et id amet maximus purus. Nec magna sagittis nisi, interdum consectetur est. Ut id nec nisl. Ut et elit non sapiens tempus id sed lectus.</strong><p>Duis et ac semper justo. Sed quis urna et elit rutrum semper consectetur. Maecenas id odio dapibus sit amet. Phasellus interdum elit bibendum tellus. Morbi ac eu libero auctor et tellus maximus. Duis et dui aliquam mauris at commodo tortor. Nullam commodo faucibus massa, nunc quis massa at id amet.<div class=image-grid><div class="bg-gray-200 flex items-center justify-center rounded-2xl h-64"><svg class="text-gray-400 h-16 w-16"fill=none stroke=currentColor viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"stroke-linecap=round stroke-linejoin=round stroke-width=1.5></path></svg></div><div class="bg-gray-200 flex items-center justify-center rounded-2xl h-64"><svg class="text-gray-400 h-16 w-16"fill=none stroke=currentColor viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"stroke-linecap=round stroke-linejoin=round stroke-width=1.5></path></svg></div><div class="bg-gray-200 flex items-center justify-center rounded-2xl h-64"><svg class="text-gray-400 h-16 w-16"fill=none stroke=currentColor viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"stroke-linecap=round stroke-linejoin=round stroke-width=1.5></path></svg></div></div><h2>Vivamus non ultrices metus.</h2><p>Image ac tempus tortor, a ullamcorper ante. Maecenas vel justo aliquot. Phasellus integer nisl. Nullam id massa accumsan, consequat ante quis, placerat orci. <strong>Donec id nunc sagittis, hendrerit maximus est. Phasellus orci.</strong><p>Doner gravida tempus vehicula. Mauris fauciat sem id sint amet bibendum. Aliquam fermentum turpis quis rutrum. Phasellus in nulla ante, id consequat nisl congue ligula. <strong>Nam ac ligula nunc. Pellentesque turpis semper. Lorem ipsum dolor amet, consectetur adipiscing elit.</strong> Cras justo vitae nulla massa sed. Phasellus faucibus elit lobortis pellentesque iaculis quam et. Praesent et augue risque id velit turpis magna erat aliquot ligula accumsan velit. Ut aliquam lorem ligula. Id efficitur viverra.<div class="gap-8 grid md:grid-cols-2 my-12"><div class="bg-gray-200 flex items-center justify-center rounded-2xl h-80"><svg class="text-gray-400 h-20 w-20"fill=none stroke=currentColor viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"stroke-linecap=round stroke-linejoin=round stroke-width=1.5></path></svg></div><div><h4>Lorem ipsum dolor sit amet.</h4><p>Consectetur adipiscing elit. Etiam hendrerit ullamcorper est. Cum socis dapibus non. Nulla rhoncus erat ut odio consequat nisi. Morbi auctor. Nam nec dui. Aliquam volutpat quam, orci. Donec rutrum tempus dolor, sed venenatis eros congue.<h4 class=mt-6>Aliquam erat volutpat. Nam in turpis sagittis.</h4><p>Donec quis dui. Aliquam. Quisque imperdiet. orci quis lobortis sed venenatis eros congue. Nulla ornare tincidunt. Proin placerat sed, imperdiet lorem vehicula libero maximus maximus.<p class="mt-6 font-bold">In sit amsat libero sit ex viverra maximus.</div></div><p>Mauris ac lectus commodo eros egestas vehicula. Vivamus scelerisque nisl eu sapien tempus id, mensicus mauris facilisis.<h2>In faucibus nec urna ut tristique.</h2><p>Pellentesque aliquot pulvinar ante quis commodo. Suspendisse auctor odio. Cras id nibh non <strong>magna pellentesque odio gravida non.</strong> Proin faucibus porta letrus. elit phasellus elit ultricies accumsan elit. Ut volutpate quis ligula. Id aliquem turpis. Proin mauris nulla id et lobortis odio. Sed elementum fetus.<p>Vestibulum vel hendrerit velit est pret cursed dictum. Aenean nulla consequat nec placerat. Morbi pellentesque non tellus ut seclersus dapibus. Cras ligula ligula. Morbi velit et faucibus vitae viverra molitus. Proin auctor mauris odio. Aenean mauris praesent posuere viverra velit. Proin auctor mauris odio. Aenean vel et rhoncus sed lorem odio.<div class=sidebar-info><h4>Proin auctor mauris odio. Aenean vel et sed lorem lobortis odio.</h4><p>Nam pret rutus incididunt. Id augittis elit turpis cursit. Nullam torquet cursit et augue elit. Donec ligula consequat massa vulputate velit portor. Ut in mollit volupat vestibula ligul dignissim mauris fermentum posuere ligula odio. Sed elementum fetus.</div><h2>Duis ac aliquam mauris.</h2><p>Vivamus euismod, justo et et amet <strong>porttitor faucibat, massa nisl nulla odis, eget vehicula urna</strong> nisl sed eros. <strong>Pellentesque vulputate vivimus magna tortor.</strong> id accumsan. Pellentesque. Sed lobortis non ligula. Ut in lorem est. Id ultricies vel commodo bibendum vitae velit. Proin interdum porttitor velit. Suspendisse interdum congue porttitor at ex vitae et. Integer ac imperdiet. Proin aean ex turpis sit, nullam sit amet sodales nibh.<h3>Integer eu turpis sit, nullam sit amet sodales nibh.</h3>`;
const tagDescription = `Sed justo lacus, pretium at est eget, mollis scelerisque ipsum. Aenean id nisi vitae mauris placerat gravida sed vel purus. Suspendisse semper erat in augue gravida fermentum. Praesent neque libero, porttitor sit amet est at, lobortis imperdiet ligula. Sed semper mi eget ipsum ullamcorper, eu malesuada arcu convallis.`;

const articles: Article[] = [
  {
    id: "2",
    category: "Bouygues Telecom",
    date: "03 novembre 2025",
    readTime: "12 min",
    title: "Praesent neque libero",
    excerpt:
      "Culpa iste impedit alias rem at eum porro amet consequatur neque quibusdam fa...",
    image: cover,
    link: "/news/2",
    badge: "À la une",
    content,
    tags,
    cover,
    tagDescription,
  },
  {
    id: "3",
    category: "Bouygues Telecom",
    date: "03 novembre 2025",
    readTime: "12 min",
    title: "Praesent neque libero",
    excerpt:
      "Culpa iste impedit alias rem at eum porro amet consequatur neque quibusdam fa...",
    image: cover,
    link: "/news/3",
    badge: "Dossier",
    content,
    tags,
    cover,
    tagDescription,
  },
  {
    id: "4",
    category: "Bouygues Telecom",
    date: "03 novembre 2025",
    readTime: "12 min",
    title: "Praesent neque libero",
    excerpt:
      "Culpa iste impedit alias rem at eum porro amet consequatur neque quibusdam fa...",
    image: cover,
    link: "/news/4",
    content,
    tags,
    cover,
    tagDescription,
  },
  {
    id: "5",
    category: "Bouygues Telecom",
    date: "03 novembre 2025",
    readTime: "12 min",
    title: "Praesent neque libero",
    excerpt:
      "Culpa iste impedit alias rem at eum porro amet consequatur neque quibusdam fa...",
    image: cover,
    link: "/news/5",
    content,
    tags,
    cover,
    tagDescription,
  },
];

export async function getAllNews(limit = 6) {
  try {
    console.log(
      "Tentative de récupération depuis:",
      `${WORDPRESS_API_URL}/posts?per_page=${limit}&_embed`
    );

    const response = await new Promise<Article[]>((resolve) => {
      setTimeout(() => {
        resolve(articles);
      }, Math.floor(Math.random() * 1001) + 2000);
    });

    return response.map((post) => {
      return {
        ...post,
        slug: post.id || "article",
      };
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des posts:", error);
    return [];
  }
}

// function calculateReadingTime(content) {
//   if (!content) return "1 min";

//   const wordsPerMinute = 200;
//   const plainText = content.replace(/<[^>]*>/g, "");
//   const words = plainText.split(/\s+/).filter((w) => w.length > 0).length;
//   const minutes = Math.ceil(words / wordsPerMinute) || 1;
//   return `${minutes} min`;
// }

export async function getNewsBySlug(slug: string) {
  try {
    const posts = await new Promise<Article[]>((resolve) => {
      setTimeout(() => {
        resolve(articles.filter((i) => i.id === slug));
      }, Math.floor(Math.random() * 1001) + 2000);
    });

    const post = posts[0]; // L'API retourne un tableau même pour un seul article

    if (!post) {
      return null;
    }

    return {
      ...post,
      slug: post.id || "article",
    };
  } catch (error) {
    console.error("Erreur lors de la récupération du post:", error);
    return null;
  }
}
