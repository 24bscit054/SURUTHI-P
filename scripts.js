<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Gayathri — Portfolio</title>
  <style>
    :root{--bg:#0f1724;--card:#0b1220;--muted:#94a3b8;--accent:#7c3aed}
    *{box-sizing:border-box}
    html,body{height:100%;margin:0;font-family:Inter,system-ui,Segoe UI,Roboto,'Helvetica Neue',Arial;background:linear-gradient(180deg,#071024 0%,#0b1220 100%);color:#e6eef8}
    .container{max-width:960px;margin:36px auto;padding:24px}
    header{display:flex;align-items:center;justify-content:space-between;gap:16px}
    .brand{display:flex;gap:12px;align-items:center}
    .avatar{width:64px;height:64px;border-radius:12px;background:linear-gradient(135deg,var(--accent),#06b6d4);display:flex;align-items:center;justify-content:center;font-weight:700}
    h1{margin:0;font-size:1.4rem}
    p.lead{color:var(--muted);margin:4px 0 0}
    nav{display:flex;gap:12px}
    nav a{color:var(--muted);text-decoration:none;padding:8px;border-radius:8px}
    nav a:hover{color:#fff;background:rgba(255,255,255,0.04)}
    .grid{display:grid;grid-template-columns:1fr 320px;gap:20px;margin-top:20px}
    .card{background:rgba(255,255,255,0.02);padding:18px;border-radius:12px}
    .skills{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
    .skill{background:rgba(255,255,255,0.03);padding:6px 10px;border-radius:999px;font-size:0.85rem;color:var(--muted)}
    .project{border-left:3px solid rgba(255,255,255,0.03);padding-left:12px;margin-bottom:14px}
    footer{margin-top:28px;text-align:center;color:var(--muted);font-size:0.9rem}
    /* responsive */
    @media (max-width:880px){.grid{grid-template-columns:1fr}.avatar{width:56px;height:56px}}
    .btn{display:inline-block;padding:8px 12px;border-radius:10px;background:linear-gradient(90deg,var(--accent),#06b6d4);color:#051023;text-decoration:none;font-weight:600}
    .contact-row{display:flex;gap:8px;flex-wrap:wrap}
    input,textarea{width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <div class="avatar">G</div>
        <div>
          <h1>Gayathri</h1>
          <p class="lead">2<sup>nd</sup> year BSc — Information Technology</p>
        </div>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main class="grid">
      <section>
        <div class="card" id="about">
          <h2>About me</h2>
          <p style="color:var(--muted)">Hi — I'm Gayathri. I'm studying BSc Information Technology (2nd year). I enjoy building small web projects, learning JavaScript, and solving problems. This simple portfolio showcases a few projects, my skills, and how to contact me.</p>
        </div>

        <div class="card" id="projects" style="margin-top:14px">
          <h2>Projects</h2>
          <div class="project">
            <h3>Simple Portfolio (this site)</h3>
            <p class="lead" style="margin:6px 0 0;color:var(--muted)">A responsive single-file portfolio built with HTML, CSS and a little JavaScript.</p>
          </div>
          <div class="project">
            <h3>Calculator App</h3>
            <p class="lead" style="margin:6px 0 0;color:var(--muted)">A basic calculator to practice DOM and event handling.</p>
          </div>
          <a class="btn" href="#contact" style="margin-top:8px;display:inline-block">Hire / Contact</a>
        </div>

        <div class="card" id="skills" style="margin-top:14px">
          <h2>Skills</h2>
          <div class="skills">
            <span class="skill">HTML</span>
            <span class="skill">CSS</span>
            <span class="skill">JavaScript</span>
            <span class="skill">Bootstrap</span>
            <span class="skill">Git basics</span>
          </div>
        </div>
      </section>

      <aside>
        <div class="card">
          <h3>Education</h3>
          <p class="lead">Currently: 2<sup>nd</sup> year BSc — Information Technology</p>
          <hr style="opacity:0.06;margin:12px 0" />
          <h3>Contact</h3>
          <p class="lead" style="color:var(--muted)">You can put your email or phone here.</p>
          <div style="margin-top:10px">
            <strong>Email:</strong>
            <div style="color:var(--muted);margin-top:6px">your.email@example.com</div>
          </div>
        </div>

        <div class="card" style="margin-top:14px" id="contact">
          <h3>Send a message</h3>
          <form id="contactForm">
            <div style="margin-bottom:8px"><input type="text" id="name" placeholder="Your name" required></div>
            <div style="margin-bottom:8px"><input type="email" id="email" placeholder="Email" required></div>
            <div style="margin-bottom:8px"><textarea id="message" rows="4" placeholder="Message" required></textarea></div>
            <div style="text-align:right"><button class="btn" type="submit">Send</button></div>
            <p id="formMsg" style="color:var(--muted);margin-top:8px"></p>
          </form>
        </div>
      </aside>
    </main>

    <footer>
      <div>Made with ♥ by Gayathri — 2nd BSc Information Technology</div>
    </footer>
  </div>

  <script>
    // Smooth scroll for nav links
    document.querySelectorAll('nav a, .btn[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const href=a.getAttribute('href');
        if(!href.startsWith('#')) return;
        e.preventDefault();
        const el=document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      });
    });

    // Simple contact form handler (demo - does not send anywhere)
    const form=document.getElementById('contactForm');
    const msg=document.getElementById('formMsg');
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const name=document.getElementById('name').value.trim();
      const email=document.getElementById('email').value.trim();
      const message=document.getElementById('message').value.trim();
      if(!name||!email||!message){msg.textContent='Please fill all fields.';return}
      msg.textContent='Thanks, '+name+"! Your message is noted (demo).";
      form.reset();
    });
  </script>
</body>
</html>
