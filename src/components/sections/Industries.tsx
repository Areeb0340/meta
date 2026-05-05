// import { motion, type Variants } from "framer-motion";
// import {
//   Cpu,
//   Stethoscope,
//   Banknote,
//   BookOpen,
//   ShoppingBag,
//   Building2,
//   HandHeart,
//   Landmark,
//   Megaphone,
//   Scale,
// } from "lucide-react";

// const reveal: Variants = {
//   hidden: { opacity: 0, y: 30, scale: 0.96 },
//   show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
// };
// const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

// const INDUSTRIES = [
//   { icon: Cpu,          name: "SaaS & Technology" },
//   { icon: Stethoscope,  name: "Healthcare & Pharma" },
//   { icon: Banknote,     name: "Financial Services & Fintech" },
//   { icon: BookOpen,     name: "Education & E-learning" },
//   { icon: ShoppingBag,  name: "Retail & E-commerce" },
//   { icon: Building2,    name: "Real Estate & Property" },
//   { icon: HandHeart,    name: "Non-profit & NGO" },
//   { icon: Landmark,     name: "Government & Public Sector" },
//   { icon: Megaphone,    name: "Marketing & Advertising" },
//   { icon: Scale,        name: "Legal & Professional Services" },
// ];

// export function Industries() {
//   return (
//     <section className="relative py-20 lg:py-28 bg-[color:var(--brand-navy-deep)] text-white overflow-hidden">
//       {/* grid */}
//       <div
//         aria-hidden
//         className="absolute inset-0 opacity-[0.18] -z-10"
//         style={{
//           backgroundImage:
//             "linear-gradient(color-mix(in oklab, var(--brand-cyan) 60%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--brand-cyan) 60%, transparent) 1px, transparent 1px)",
//           backgroundSize: "56px 56px",
//           maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
//         }}
//       />
//       <motion.div
//         aria-hidden
//         animate={{ rotate: 360 }}
//         transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
//         className="absolute -top-32 -left-32 h-[460px] w-[460px] rounded-full opacity-30 -z-10"
//         style={{
//           background:
//             "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 60%, transparent), transparent 70%)",
//         }}
//       />
//       <motion.div
//         aria-hidden
//         animate={{ rotate: -360 }}
//         transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
//         className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full opacity-25 -z-10"
//         style={{
//           background:
//             "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 70%, transparent), transparent 70%)",
//         }}
//       />

//       <div className="container mx-auto px-4 md:px-6">
//         {/* heading */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.3 }}
//           variants={stagger}
//           className="text-center max-w-3xl mx-auto mb-14"
//         >
//           <motion.p
//             variants={reveal}
//             className="text-[color:var(--brand-cyan)] text-sm font-semibold tracking-[0.3em] uppercase"
//           >
//             # Industries We Serve
//           </motion.p>
//           <motion.h2
//             variants={reveal}
//             className="mt-4 text-4xl md:text-5xl font-bold tracking-tight"
//           >
//             2D Animation for{" "}
//             <span className="text-[color:var(--brand-cyan)]">Every Industry</span>
//           </motion.h2>
//           <motion.p variants={reveal} className="mt-4 text-white/75">
//             Metagenix creates 2D animated videos for businesses across a wide range of
//             industries. No matter your sector, our team has the expertise to communicate
//             your message effectively.
//           </motion.p>
//         </motion.div>

//         {/* hex / pill grid */}
//         <motion.ul
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.1 }}
//           variants={stagger}
//           className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto"
//         >
//           {INDUSTRIES.map((it) => {
//             const Icon = it.icon;
//             return (
//               <motion.li
//                 key={it.name}
//                 variants={reveal}
//                 whileHover={{ y: -6 }}
//                 className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 md:p-6 text-center hover:border-[color:var(--brand-cyan)] transition-all overflow-hidden"
//               >
//                 <span
//                   aria-hidden
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                   style={{
//                     background:
//                       "radial-gradient(circle at 50% 0%, color-mix(in oklab, var(--brand-cyan) 28%, transparent), transparent 65%)",
//                   }}
//                 />
//                 <div className="relative mx-auto grid place-items-center h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-gradient-to-br from-[color:var(--brand-cyan)] to-[color:var(--brand-navy)] text-white shadow-[0_0_24px_color-mix(in_oklab,var(--brand-cyan)_50%,transparent)] group-hover:scale-110 transition-transform">
//                   <Icon className="h-7 w-7 md:h-8 md:w-8" />
//                 </div>
//                 <h3 className="relative mt-4 text-sm md:text-base font-semibold leading-snug">
//                   {it.name}
//                 </h3>
//                 <span
//                   aria-hidden
//                   className="relative mx-auto mt-3 block h-px w-6 bg-white/20 group-hover:w-12 group-hover:bg-[color:var(--brand-cyan)] transition-all duration-500"
//                 />
//               </motion.li>
//             );
//           })}
//         </motion.ul>
//       </div>
//     </section>
//   );
// }
