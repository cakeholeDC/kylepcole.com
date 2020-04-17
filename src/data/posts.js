// https://jsonplaceholder.typicode.com/posts

const posts =[
  {
    "id": 1,
    "timestamp": 'November 14, 2019',
    "title": "A Rubyist’s Guide to SQL Joins",
    "teaser":'If you’ve ever had a job that required you to run reports, you’ve probably had some light exposure to SQL',
    "thumbnail":'',
    "body": `<p>If you’ve ever had a job that required you to run reports, you’ve probably had some light exposure to SQL <em>(Structured Query Language)</em>. If so, you’ve probably noticed that even if you don’t have any coding experience, the syntax is pretty readable.</p><pre>SELECT column FROM table WHERE (column = ‘value’)</pre><p>Even if you don’t know what the data is, you can draw the conclusion that we’re <code>SELECT</code>ing <em>something</em> <code>FROM</code> <em>something else</em> <code>WHEN</code> a condition is met. You can probably even guess what that condition is!</p><p>Pretty simple, right? Well, it is. Until <code>JOIN</code> enters the picture…</p><p>For years, I struggled with how to properly <code>JOIN</code> two tables. In fact, I hated joins so much that my go to move was to download the data to <em>.csv</em> and perform a bunch of <code>VLOOKUP</code> functions in Excel™</p><div style="width:100%;height:0;padding-bottom:69%;position:relative;"><iframe src="https://giphy.com/embed/3o7TKwgqwdlrxaEy40" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><figure><figcaption>Yikes.</figcaption></figure><p>I know. <strong>I apologize.</strong></p><p>The reason I was scared of <code>JOIN</code>s is because whenever I looked up examples and documentation I always found something that looked like this:</p><pre>SELECT * FROM employees e<br> JOIN jobs j ON e.job_id = j.job_id<br> LEFT JOIN employees m ON e.manager_id = m.employee_id<br> INNER JOIN departments d ON d.department_id = e.department_id<br> OUTER JOIN employees dm ON d.manager_id = dm.employee_id<br> LEFT JOIN locations l ON d.location_id = l.location_id<br> LEFT JOIN countries c ON l.country_id = c.country_id<br> RIGHT JOIN regions r ON c.region_id = r.region_id<br> LEFT OUTER JOIN jobs jj ON jj.job_id = jh.job_id<br>ORDER BY e.employee_id;</pre><p>I’d then inevitably come across some super useful documentation paired with the lunar calendar of venn diagrams <em>(if you’re thinking that’s not how venn diagrams work, you’re right)</em>.</p><blockquote> <strong>(INNER) JOIN:</strong> Returns records that have matching values in both tables<br><strong>LEFT (OUTER) JOIN:</strong> Returns all records from the left table, with matches from the right<br><strong>RIGHT (OUTER) JOIN:</strong> Returns all records from the right table, with matches from the left<br><strong>FULL (OUTER) JOIN:</strong> Returns all records when there is a match<br><br><strong>TIPS:</strong> <strong>FULL OUTER JOIN</strong>, <strong>FULL JOIN</strong> and <strong>LEFT JOIN</strong> are all the same.<br><strong>RIGHT JOIN</strong> is the opposite of <strong>LEFT JOIN</strong>.</blockquote><figure><img src="https://cdn-images-1.medium.com/max/800/1*rA5b_M2rYZzDmj5JUzhYvg.jpeg"/> <figcaption>SQLunar Calendar??</figcaption></figure><div style="width:100%;height:0;padding-bottom:70%;position:relative;"><iframe src="https://giphy.com/embed/vc0KiL9PrHzLMZpjyh" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><figure><figcaption>Excuse me… what?</figcaption></figure><p><strong>Hold Up.</strong> If FULL OUTER returns matches in both the LEFT and RIGHT, then why use LEFT and RIGHT at all? And if LEFT is the same as FULL, then why have two different options to do the same thing? What does FULL mean anyways? I’m so confused…</p><p>Each time I saw this graphic I thought to myself <em>“there </em><strong><em>has</em></strong><em> to be better explanation of this on the internet.”</em> But after years of searching, I’ve turned up nothing but variations of this lunar calendar graphic. So, I took the matter into my own hands and decided to write out each <code>JOIN</code> using a language I have a good grasp on; <strong>Ruby.</strong></p><p>So, without further ado, here are <strong>SQL Joins as Ruby Methods</strong>.</p><p><strong><em>NOTE:</em></strong><em> While the Ruby syntax below looks correct, </em><strong><em>this is pseudocode</em></strong><em> meant to represent SQL actions. I do not recommend that you copy and paste anything into your application (isn’t that plagiarism?).</em></p><h3>INNER JOIN</h3><p>I decided to start with the one that <em>did</em> make sense to me, the only one that actually <em>does</em> work like a venn diagram (but who asked me). An <code>INNER JOIN</code> will <em>iterate</em> through each row in the first table, and select that row when there is a match in the second table. When selecting that row, the data from the second table is also included in the new dataset.</p><p>Here it is in <strong>Ruby.</strong></p><pre>def INNER_JOIN(table_1, table_2)</pre><pre>   new_table = {} ## create a new empty table</pre><pre>   # for each row in table_1<br>   table_1.select do |table_1_row| </pre><pre>      # scan table_2 and find the data that matches <br>      table_2_match = table_2.find do |table_2_row| <br>          table_2_row.column == table_1_row.column<br>      end</pre><pre>      # if a match is found (if result is true)<br>      # add specified column(s) to new_table as a key/value pair<br>      if table_2_match<br>         new_table[:table_1_data] = table_1_row.column<br>         new_table[:table_2_data] = table_2_row_match.column<br>      end</pre><pre>      return new_table<br>      # if no data matched, new_table will be empty<br>   end</pre><pre>end</pre><p>Let’s refer to this as a <code>.select/.select</code> relationship.</p><p><strong><em>I know</em></strong><em>, </em>we used <code>.find</code> on table_2.<em> </em>But, we are still in theory <strong>selecting</strong> data subsets from both tables—again, it’s pseudocode.</p><h3>LEFT JOIN</h3><p>What a <code>LEFT JOIN</code> does is <em>iterate</em> through each row in the first table, and checks the second table for a corresponding value. If the second table contains a match, the data from the second table is appended to that row in the first table. <strong>All rows from the first table are returned.</strong></p><p>We’ll refer this as a <code>.map/.find</code> relationship. We are <em>mapping</em> the first set of data to a new dataset. While doing so, we are iterating over the second data set to find a match to be included in our new data set.</p><pre>def LEFT_JOIN(table_1, table_2)</pre><pre>SELECT * FROM employees e<br> JOIN jobs j ON e.job_id = j.job_id<br> LEFT JOIN employees m ON e.manager_id = m.employee_id<br> INNER JOIN departments d ON d.department_id = e.department_id<br> OUTER JOIN employees dm ON d.manager_id = dm.employee_id<br> LEFT JOIN locations l ON d.location_id = l.location_id<br> LEFT JOIN countries c ON l.country_id = c.country_id<br> RIGHT JOIN regions r ON c.region_id = r.region_id<br> LEFT OUTER JOIN jobs jj ON jj.job_id = jh.job_id<br>ORDER BY e.employee_id;</pre>0<pre>SELECT * FROM employees e<br> JOIN jobs j ON e.job_id = j.job_id<br> LEFT JOIN employees m ON e.manager_id = m.employee_id<br> INNER JOIN departments d ON d.department_id = e.department_id<br> OUTER JOIN employees dm ON d.manager_id = dm.employee_id<br> LEFT JOIN locations l ON d.location_id = l.location_id<br> LEFT JOIN countries c ON l.country_id = c.country_id<br> RIGHT JOIN regions r ON c.region_id = r.region_id<br> LEFT OUTER JOIN jobs jj ON jj.job_id = jh.job_id<br>ORDER BY e.employee_id;</pre>1<pre>SELECT * FROM employees e<br> JOIN jobs j ON e.job_id = j.job_id<br> LEFT JOIN employees m ON e.manager_id = m.employee_id<br> INNER JOIN departments d ON d.department_id = e.department_id<br> OUTER JOIN employees dm ON d.manager_id = dm.employee_id<br> LEFT JOIN locations l ON d.location_id = l.location_id<br> LEFT JOIN countries c ON l.country_id = c.country_id<br> RIGHT JOIN regions r ON c.region_id = r.region_id<br> LEFT OUTER JOIN jobs jj ON jj.job_id = jh.job_id<br>ORDER BY e.employee_id;</pre>2<pre>SELECT * FROM employees e<br> JOIN jobs j ON e.job_id = j.job_id<br> LEFT JOIN employees m ON e.manager_id = m.employee_id<br> INNER JOIN departments d ON d.department_id = e.department_id<br> OUTER JOIN employees dm ON d.manager_id = dm.employee_id<br> LEFT JOIN locations l ON d.location_id = l.location_id<br> LEFT JOIN countries c ON l.country_id = c.country_id<br> RIGHT JOIN regions r ON c.region_id = r.region_id<br> LEFT OUTER JOIN jobs jj ON jj.job_id = jh.job_id<br>ORDER BY e.employee_id;</pre>3<pre>SELECT * FROM employees e<br> JOIN jobs j ON e.job_id = j.job_id<br> LEFT JOIN employees m ON e.manager_id = m.employee_id<br> INNER JOIN departments d ON d.department_id = e.department_id<br> OUTER JOIN employees dm ON d.manager_id = dm.employee_id<br> LEFT JOIN locations l ON d.location_id = l.location_id<br> LEFT JOIN countries c ON l.country_id = c.country_id<br> RIGHT JOIN regions r ON c.region_id = r.region_id<br> LEFT OUTER JOIN jobs jj ON jj.job_id = jh.job_id<br>ORDER BY e.employee_id;</pre>4<pre>SELECT * FROM employees e<br> JOIN jobs j ON e.job_id = j.job_id<br> LEFT JOIN employees m ON e.manager_id = m.employee_id<br> INNER JOIN departments d ON d.department_id = e.department_id<br> OUTER JOIN employees dm ON d.manager_id = dm.employee_id<br> LEFT JOIN locations l ON d.location_id = l.location_id<br> LEFT JOIN countries c ON l.country_id = c.country_id<br> RIGHT JOIN regions r ON c.region_id = r.region_id<br> LEFT OUTER JOIN jobs jj ON jj.job_id = jh.job_id<br>ORDER BY e.employee_id;</pre>5<pre>end</pre><p>Why is this called a <em>LEFT</em> join? Well, in English we read from left to right. Look at the arguments for this method, which table appears on the left?</p><p><a href="https://en.wikipedia.org/wiki/Qalb_%28programming_language%29" data-href="https://en.wikipedia.org/wiki/Qalb_(programming_language)" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">Do they code from right to left in Arabic?</a> 🤔</p><h3>RIGHT JOIN</h3><p>We already know from that handy documentation above that a <code>RIGHT JOIN</code> is the opposite of a <code>LEFT JOIN</code>. Knowing that, we can assume that a <code>RIGHT JOIN</code> works the same way, except it <em>iterates</em> through table_2 <strong>first</strong> (using <code>.map</code>) and then <em>iterates</em> through table_1 using <code>.find</code>.</p><pre>SELECT * FROM employees e<br> JOIN jobs j ON e.job_id = j.job_id<br> LEFT JOIN employees m ON e.manager_id = m.employee_id<br> INNER JOIN departments d ON d.department_id = e.department_id<br> OUTER JOIN employees dm ON d.manager_id = dm.employee_id<br> LEFT JOIN locations l ON d.location_id = l.location_id<br> LEFT JOIN countries c ON l.country_id = c.country_id<br> RIGHT JOIN regions r ON c.region_id = r.region_id<br> LEFT OUTER JOIN jobs jj ON jj.job_id = jh.job_id<br>ORDER BY e.employee_id;</pre>7<pre>SELECT * FROM employees e<br> JOIN jobs j ON e.job_id = j.job_id<br> LEFT JOIN employees m ON e.manager_id = m.employee_id<br> INNER JOIN departments d ON d.department_id = e.department_id<br> OUTER JOIN employees dm ON d.manager_id = dm.employee_id<br> LEFT JOIN locations l ON d.location_id = l.location_id<br> LEFT JOIN countries c ON l.country_id = c.country_id<br> RIGHT JOIN regions r ON c.region_id = r.region_id<br> LEFT OUTER JOIN jobs jj ON jj.job_id = jh.job_id<br>ORDER BY e.employee_id;</pre>0<pre>SELECT * FROM employees e<br> JOIN jobs j ON e.job_id = j.job_id<br> LEFT JOIN employees m ON e.manager_id = m.employee_id<br> INNER JOIN departments d ON d.department_id = e.department_id<br> OUTER JOIN employees dm ON d.manager_id = dm.employee_id<br> LEFT JOIN locations l ON d.location_id = l.location_id<br> LEFT JOIN countries c ON l.country_id = c.country_id<br> RIGHT JOIN regions r ON c.region_id = r.region_id<br> LEFT OUTER JOIN jobs jj ON jj.job_id = jh.job_id<br>ORDER BY e.employee_id;</pre>9<pre>def INNER_JOIN(table_1, table_2)</pre>0<pre>def INNER_JOIN(table_1, table_2)</pre>1<pre>def INNER_JOIN(table_1, table_2)</pre>2<pre>def INNER_JOIN(table_1, table_2)</pre>3<pre>end</pre><p>Why is this called a <em>RIGHT</em> join? Again, we read from left to right. Look at the arguments for this method, which table appears on the <em>right</em>? You’ll also notice that we switched the order in which we iterate through the tables, but not the order in which we call the arguments themselves.</p><h3>OUTER JOIN</h3><p>I actually had a really hard time writing this one in Ruby. I think that’s because I couldn’t think of a practical example in which I’d need an <code>OUTER JOIN</code> so it was difficult for me to walk through the process logically. So, I’m going to just skip it for now. I’ll figure it out when the time comes.</p><pre>def INNER_JOIN(table_1, table_2)</pre>5<h3>CONCLUSION</h3><p>This was fun. But even after doing this exercise, SQL joins continue to be a pain in the <code>@$$</code> <em>(oh stop, it’s an instance variable)</em>. But, hopefully they make a little more sense to you now. If not, there’s always <a href="https://rubygems.org/gems/activerecord/" data-href="https://rubygems.org/gems/activerecord/" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank"><strong>Active Record</strong></a>.</p><p>Actually, even if you <em>do</em> understand SQL joins, just use <strong>Active Record</strong>. It’ll change your life as a Rubyist. But more on that later. 🙃</p><p>cakehole out.</p>`,
    "tags": ["Ruby", "Active Record","SQL"]
  },
  {
    "id": 2,
    "timestamp": '',
    "title": "qui est esse",
    "teaser":'Voluptate ullamco ut aliquip laborum reprehenderit qui esse cupidatat ut elit sint id.',
    "thumbnail":'',
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    "tags": []
  },
  {
    "id": 3,
    "timestamp": '',
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "teaser":'Duis proident reprehenderit in sed dolor in amet exercitation dolor nulla culpa.',
    "thumbnail":'',
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    "tags": []
  },
  {
    "id": 4,
    "timestamp": '',
    "title": "eum et est occaecati",
    "teaser":'Non ut in ullamco duis tempor nisi ullamco ad.',
    "thumbnail":'',
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    "tags": []
  },
  {
    "id": 5,
    "timestamp": '',
    "title": "nesciunt quas odio",
    "teaser":'Aliquip dolor nulla voluptate proident sunt id amet nostrud exercitation in duis.',
    "thumbnail":'',
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    "tags": []
  },
  {
    "id": 6,
    "timestamp": '',
    "title": "dolorem eum magni eos aperiam quia",
    "teaser":'Dolor consectetur nostrud ex anim non mollit minim sed enim do ut ad tempor ut nisi ut sint.',
    "thumbnail":'',
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    "tags": []
  },
  {
    "id": 7,
    "timestamp": '',
    "title": "magnam facilis autem",
    "teaser":'Ut in occaecat aliqua in pariatur dolor excepteur aute reprehenderit sint elit consequat ullamco.',
    "thumbnail":'',
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    "tags": []
  },
  {
    "id": 8,
    "timestamp": '',
    "title": "dolorem dolore est ipsam",
    "teaser":'Ullamco deserunt laboris irure dolor ut adipisicing dolor qui amet aliquip anim do quis.',
    "thumbnail":'',
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    "tags": []
  },
  {
    "id": 9,
    "timestamp": '',
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "teaser":'Quis elit dolor dolore eiusmod adipisicing dolor irure eiusmod ea dolore non sed magna.',
    "thumbnail":'',
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    "tags": []
  },
  {
    "id": 10,
    "timestamp": '',
    "title": "optio molestias id quia eum",
    "teaser":'Sunt enim proident consectetur proident enim dolore esse dolore excepteur duis.',
    "thumbnail":'',
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    "tags": []
  },
  {
    "id": 11,
    "timestamp": '',
    "title": "et ea vero quia laudantium autem",
    "teaser":'Lorem ipsum qui proident ut dolore labore qui adipisicing tempor qui veniam ea elit.',
    "thumbnail":'',
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    "tags": []
  },
  {
    "id": 12,
    "timestamp": '',
    "title": "in quibusdam tempore odit est dolorem",
    "teaser":'Labore ullamco cillum officia labore est dolore ullamco aliquip officia magna.',
    "thumbnail":'',
    "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    "tags": []
  },
  {
    "id": 13,
    "timestamp": '',
    "title": "dolorum ut in voluptas mollitia et saepe quo animi",
    "teaser":'Do voluptate sint duis elit nisi ut dolor laborum adipisicing ut dolore fugiat tempor ut dolore dolor.',
    "thumbnail":'',
    "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    "tags": []
  },
  {
    "id": 14,
    "timestamp": '',
    "title": "voluptatem eligendi optio",
    "teaser":'Sit anim voluptate enim in reprehenderit id eiusmod veniam in ad deserunt sint irure velit ex dolor ut.',
    "thumbnail":'',
    "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
    "tags": []
  },
  {
    "id": 15,
    "timestamp": '',
    "title": "eveniet quod temporibus",
    "teaser":'Incididunt non in sint qui est sint excepteur ut et.',
    "thumbnail":'',
    "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    "tags": []
  },
  {
    "id": 16,
    "timestamp": '',
    "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    "teaser":'Sed magna proident veniam minim incididunt ullamco cupidatat elit quis ullamco esse pariatur ea sed.',
    "thumbnail":'',
    "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
    "tags": []
  },
  {
    "id": 17,
    "timestamp": '',
    "title": "fugit voluptas sed molestias voluptatem provident",
    "teaser":'Labore elit cupidatat nulla veniam cupidatat ullamco veniam elit reprehenderit non do ex est.',
    "thumbnail":'',
    "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
    "tags": []
  },
  {
    "id": 18,
    "timestamp": '',
    "title": "voluptate et itaque vero tempora molestiae",
    "teaser":'Nostrud tempor tempor nisi qui pariatur irure minim ut consequat irure do esse dolor.',
    "thumbnail":'',
    "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
    "tags": []
  },
  {
    "id": 19,
    "timestamp": '',
    "title": "adipisci placeat illum aut reiciendis qui",
    "teaser":'Anim ut dolore cupidatat enim excepteur culpa nisi culpa enim enim dolor cupidatat non.',
    "thumbnail":'',
    "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
    "tags": []
  },
  {
    "id": 20,
    "timestamp": '',
    "title": "doloribus ad provident suscipit at",
    "teaser":'Deserunt cupidatat cillum in minim id pariatur deserunt ex cillum amet ut consequat elit aliqua.',
    "thumbnail":'',
    "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
    "tags": []
  }
]

export default posts
