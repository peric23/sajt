const T = {
  sr: {
    nav_services: "Usluge", nav_tech: "Tehnologije", nav_about: "O meni", nav_contact: "Kontakt",
    hero_sub: "Projektovanje, održavanje i zaštita IT infrastrukture: virtualizacija, mreže, bezbednost i backup.",
    hero_cta: "Kontaktiraj me", hero_cta2: "Šta radim",
    s_title: "Usluge",
    s1_t: "Virtualizacija", s1_d: "VMware vSphere/ESXi i Hyper-V: dizajn, migracije, optimizacija i održavanje virtuelnih okruženja.",
    s2_t: "Mrežna infrastruktura", s2_d: "Projektovanje i administracija LAN/WAN mreža, segmentacija, VPN veze i povezivanje udaljenih lokacija.",
    s3_t: "Bezbednost", s3_d: "Firewall politike, kontrola pristupa i zaštita sistema na nivou mreže, servera i korisnika.",
    s4_t: "Backup i DR", s4_d: "Strategije rezervnih kopija i oporavka od katastrofe, sa redovnim testiranjem oporavka.",
    t_title: "Tehnologije", t1: "Virtualizacija", t2: "Mreže i bezbednost", t3: "Sistemi", t4: "Backup i storage",
    a_title: "O meni",
    a_p1: "Senior sistem inženjer za IT infrastrukturu sa više od 15 godina iskustva u administraciji sistema, virtualizaciji, mrežama, backup-u i tehničkoj podršci.",
    a_p2: "Radio sam u velikim okruženjima sa više udaljenih lokacija, uz monitoring, dokumentaciju i podršku 2. i 3. nivoa.",
    f1: "godina iskustva", f2: "licenca", f3: "Microsoft sertifikat", f4: "Cisco sertifikat",
    c_title: "Kontakt", c_sub: "Imate projekat ili pitanje o IT infrastrukturi? Javite se."
  },
  en: {
    nav_services: "Services", nav_tech: "Technologies", nav_about: "About", nav_contact: "Contact",
    hero_sub: "Design, maintenance and protection of IT infrastructure: virtualization, networks, security and backup.",
    hero_cta: "Get in touch", hero_cta2: "What I do",
    s_title: "Services",
    s1_t: "Virtualization", s1_d: "VMware vSphere/ESXi and Hyper-V: design, migrations, optimization and maintenance of virtual environments.",
    s2_t: "Network infrastructure", s2_d: "Design and administration of LAN/WAN networks, segmentation, VPN links and connectivity for remote sites.",
    s3_t: "Security", s3_d: "Firewall policies, access control and protection of systems across network, servers and users.",
    s4_t: "Backup and DR", s4_d: "Backup and disaster recovery strategies, with regular restore testing.",
    t_title: "Technologies", t1: "Virtualization", t2: "Networking and security", t3: "Systems", t4: "Backup and storage",
    a_title: "About me",
    a_p1: "Senior IT infrastructure and systems engineer with 15+ years of experience in system administration, virtualization, networking, backup and technical support.",
    a_p2: "I have worked in large environments with multiple remote locations, covering monitoring, documentation and 2nd/3rd line support.",
    f1: "years of experience", f2: "licensed", f3: "Microsoft certification", f4: "Cisco certification",
    c_title: "Contact", c_sub: "Have a project or a question about IT infrastructure? Get in touch."
  }
};
const btn = document.getElementById("lang");
function setLang(l) {
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = T[l][el.dataset.i18n]; });
  btn.textContent = l === "sr" ? "EN" : "SR";
  try { localStorage.setItem("lang", l); } catch (e) {}
}
let saved = "sr";
try { saved = localStorage.getItem("lang") || "sr"; } catch (e) {}
setLang(saved === "en" ? "en" : "sr");
btn.addEventListener("click", () => setLang(document.documentElement.lang === "sr" ? "en" : "sr"));
document.getElementById("y").textContent = new Date().getFullYear();
