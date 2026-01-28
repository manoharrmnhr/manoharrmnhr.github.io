import React from "react";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Cloud, Activity, Github, Linkedin, Mail } from "lucide-react";

export default function DevOpsPortfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <h1 className="text-xl font-bold tracking-wide">Manohar R</h1>
        <div className="flex gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Cloud • DevOps • DevSecOps • SRE
        </motion.h2>
        <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
          Building secure, scalable, and automated cloud-native platforms across AWS, Azure & GCP with Kubernetes, GitOps and Infrastructure as Code.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <a href="#projects" className="px-6 py-3 bg-blue-600 rounded-2xl shadow-lg hover:scale-105 transition">View Projects</a>
          <a href="#contact" className="px-6 py-3 border border-slate-700 rounded-2xl hover:bg-slate-800 transition">Contact Me</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold">About Me</h3>
          <p className="mt-6 text-slate-400">
            DevSecOps Engineer with 4+ years of experience designing production-grade CI/CD systems, multi-cloud infrastructure, Kubernetes platforms, and reliability engineering frameworks with embedded security practices.
          </p>
        </div>
      </section>

      {/* Skills Dashboard */}
      <section id="skills" className="px-8 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Core Capabilities</h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card icon={<Cloud />} title="Multi-Cloud">
            AWS, Azure, GCP architecture & migration
          </Card>
          <Card icon={<Server />} title="Kubernetes & IaC">
            Docker, K8s, Helm, Terraform, Ansible
          </Card>
          <Card icon={<ShieldCheck />} title="DevSecOps">
            SAST, DAST, Trivy, RBAC, Policy as Code
          </Card>
          <Card icon={<Activity />} title="SRE & Observability">
            SLIs/SLOs, Prometheus, Grafana, Incident Mgmt
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-20 bg-slate-900">
        <h3 className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProjectCard
            title="Cloud-Native CI/CD Platform"
            desc="GitHub Actions + ArgoCD GitOps platform with observability stack."
          />
          <ProjectCard
            title="Multi-Cloud Automation"
            desc="Reusable Terraform modules across AWS, Azure & GCP."
          />
          <ProjectCard
            title="Secure DevSecOps Pipeline"
            desc="Integrated security scanning & automated K8s deployments."
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20 text-center">
        <h3 className="text-3xl font-bold">Let's Connect</h3>
        <div className="flex justify-center gap-8 mt-8 text-slate-400">
          <a href="mailto:manoharrmnhr@gmail.com"><Mail /></a>
          <a href="https://linkedin.com/in/manoharrmnhr"><Linkedin /></a>
          <a href="https://github.com/manoharrmnhr"><Github /></a>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-slate-800 text-slate-500 text-sm">
        © 2026 Manohar R | DevOps Portfolio
      </footer>
    </div>
  );
}

function Card({ icon, title, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-800"
    >
      <div className="text-blue-500 mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-slate-400 text-sm">{children}</p>
    </motion.div>
  );
}

function ProjectCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-950 p-6 rounded-2xl shadow-lg border border-slate-800"
    >
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
    </motion.div>
  );
}
