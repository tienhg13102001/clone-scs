import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import Footer from "../../components/Molecules/Footer";
import Header from "../../components/Molecules/Header";

const HomePage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="wrap overflow-x-hidden">
        <Header />
        <section className="relative mx-auto mb-0 bg-[url('/img/homepage-bg.png')] bg-repeat bg-transparent h-full lg:object-cover object-[center_center] lg:bg-fixed text-white p-5 lg:p-[100px_300px_150px_300px]">
          <div className="lg:h-[200px] h-[35px]" />
          <div className="pb-[75px] lg:pb-[190px] text-center">
            <h1 className="lg:text-xl lg:tracking-[6px] text-base">
              A.I. Energy Management Solution Provider
            </h1>
            <p className="lg:text-[60px] text-xl/[-.03em]">
              “ <span className="text-[30px] lg:text-[75px]">S</span>tandard{" "}
              <span className="text-[30px] lg:text-[75px]">C</span>ooling{" "}
              <span className="text-[30px] lg:text-[75px]">S</span>ystems ″
            </p>
          </div>
          <div>
            <p className="lg:text-[35px] text-xl/[1.4em] tracking-[-.03em] mb-5">
              Our Mission
            </p>
            <p className="text-base lg:text-xl/[1.5em]">
              The future of energy management is poised to undergo significant
              transformations due to advancements in technology, shifting energy
              demands, and the urgent need to address climate change. Our
              company explores the emerging trends in energy management,
              focusing on heat energy management, renewable energy integration,
              and energy storage solutions. Key innovations include the
              deployment of artificial intelligence (AI) and machine learning
              (ML) for predictive analytics, optimizing energy consumption, and
              reducing operational costs and special Thermal Management Systems.
              The role of decentralized energy systems, such as microgrids, is
              also highlighted as a critical driver in the evolution of energy
              management. Furthermore, the integration of renewable sources like
              solar, wind, and hydrogen with next-generation storage
              technologies, including batteries and hydrogen fuel cells, is
              discussed. Finally, our company addresses the importance of new
              technology and international cooperation to ensure a sustainable,
              resilient, and equitable energy future. The convergence of these
              factors positions energy management as a cornerstone of
              sustainable development in the 21st century.
            </p>
          </div>
          <div className="h-[100px]" />
          <motion.div
            className="flex w-full max-md:flex-col"
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <div className="flex-1 flex flex-col justify-center items-center">
              <img
                src="/img/ESS.png"
                alt=""
                className="p-2 rounded-full transition-all hover:scale-110 duration-300 bg-white/30 hover:bg-white"
              />
              <span className="mt-4 text-[18px]/[1.4em]">ESS</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <img
                src="/img/battery.png"
                alt=""
                className="p-2 rounded-full transition-all hover:scale-110 duration-300 bg-white/30 hover:bg-white"
              />
              <span className="mt-4 text-[18px]/[1.4em]">Battery</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <img
                src="/img/data-center.png"
                alt=""
                className="p-2 rounded-full transition-all hover:scale-110 duration-300 bg-white/30 hover:bg-white"
              />
              <span className="mt-4 text-[18px]/[1.4em]">Data Center</span>
            </div>
          </motion.div>
        </section>
        <section className="lg:px-[300px] lg:py-[150px] p-5">
          <div className="flex flex-col lg:gap-8 gap-2">
            <motion.h1
              className="text-[#444444] lg:text-[50px] text-xl"
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
            >
              Why <span className="text-[#150291]">SCS</span>
            </motion.h1>
            <motion.p
              className="text-[#444444] lg:text-[35px] text-xl"
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
              viewport={{ once: false }}
            >
              <span className="text-[#150291]">S</span>tandard{" "}
              <span className="text-[#150291]">C</span>ooling{" "}
              <span className="text-[#150291]">S</span>ystems
            </motion.p>
          </div>
          <img src="/img/graph.png" alt="" className="pb-5 pt-10 pl-10" />
          <motion.p
            className="text-[15px]/[1.5em]"
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            viewport={{ once: false }}
          >
            The reason why thermal management companies are important in the
            renewable energy market is because thermal management plays a key
            role in improving the efficiency, stability, and economy of
            renewable energy. Renewable energy is intermittent and irregular, so
            technology that can store or effectively utilize energy is required.
            In this context, thermal management technology plays an important
            role in several aspects.
          </motion.p>
          <motion.p
            className="text-[15px]/[1.5em]"
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            viewport={{ once: false }}
          >
            <ul className="list-decimal pl-4 text-pretty">
              <li>
                Maximizing energy storage efficiency
                <p>
                  Renewable energy, like solar and wind power, produces energy
                  in varying amounts depending on the time of day. In order to
                  supply energy stably, energy storage technology is essential,
                  and this is where thermal storage technology plays an
                  important role. For example, in solar power generation
                  systems, the generated thermal energy can be stored in
                  high-temperature materials and converted into electricity when
                  needed. This type of thermal storage technology contributes to
                  maintaining the balance of energy supply and demand in
                  situations where the supply of renewable energy is irregular.
                </p>
              </li>
              <li>
                Minimizing energy loss
                <p>
                  In order to efficiently utilize renewable energy, the
                  generated energy must be utilized to the maximum extent
                  without being wasted. In this case, thermal management plays a
                  role in minimizing energy loss. By recovering and recycling
                  waste heat generated from solar panels or wind turbines, the
                  energy efficiency of the entire system can be increased. In
                  addition, thermal management devices such as heat exchangers
                  and cooling systems can optimize equipment performance and
                  reduce losses in the energy conversion process.
                </p>
              </li>
              <li>
                Improving the stability of renewable energy systems
                <p>
                  Renewable energy power generation facilities can greatly
                  change their power generation depending on climate conditions,
                  so effective management of equipment heat is necessary to
                  operate them stably. For example, solar panels or wind
                  turbines can accumulate internal heat when operated for long
                  periods of time, which can lead to equipment performance
                  degradation or failure. Thermal management systems prevent
                  such overheating and help equipment operate at optimal
                  conditions.
                </p>
              </li>
              <li>
                Reducing carbon emissions
                <p>
                  Thermal management technologies contribute to increasing
                  energy efficiency and reducing carbon emissions across
                  industries. For example, systems such as **Concentrated Solar
                  Power (CSP)** concentrate sunlight to produce high-temperature
                  thermal energy, which is then stored and converted into
                  electricity when needed. Efficient thermal management in this
                  process allows more energy to be stored and used, reducing
                  dependence on fossil fuels. Such thermal management
                  technologies play an important role in reducing carbon
                  emissions and responding to climate change.
                </p>
              </li>
              <li>
                Expanding the application of renewable energy systems in
                industry and households
                <p>
                  To make renewable energy more widely used in homes and
                  industries, stable supply and cost efficiency are important,
                  and thermal management technology makes this possible. For
                  example, a solar heating system for households is designed to
                  heat water using sunlight, store it, and use it when needed.
                  This saves energy and makes the use of renewable energy more
                  attractive.
                </p>
              </li>
              <li>
                Integrated management of renewable energy and heat
                <p>
                  Renewable energy often produces heat as well as electricity.
                  In particular, solar thermal power generation and geothermal
                  power generation are methods of directly generating heat, and
                  if properly managed, they can be used in various fields such
                  as heating, cooling, and industrial processes in addition to
                  power generation. Thermal management companies support the
                  integrated operation of these systems and maximize the
                  utilization of renewable energy.
                </p>
              </li>
            </ul>
            <br />
            <p>
              In conclusion, thermal management companies play an important role
              in promoting the efficient production, storage, and utilization of
              renewable energy, thereby helping to develop the renewable energy
              market. They are essential partners that contribute to
              accelerating the energy transition and reducing carbon emissions
              while reducing energy loss and increasing the stability of the
              system.
            </p>
          </motion.p>
        </section>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default HomePage;
