

const PublicationsList = ({ showAll, selectedTag }) => {


  const publications = [
    <li>
      Burleyson, C.D., <strong>Khan, Z.</strong>, Kulshresta, M., Voisin, N., Zhao, M., & Rice, J.S., 2025. When do different scenarios of projected electricity demand start to meaningfully diverge? <em>Applied Energy</em>, 380, p.124948.{" "}
      <a href="https://doi.org/10.1016/j.apenergy.2024.124948" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">
        https://doi.org/10.1016/j.apenergy.2024.124948
      </a>
    </li>,
    <li>
      Weber, M., Pressburger, L., Chau, L.W., <strong>Khan, Z.</strong>, Waite, T., Westphal, M.I., Ling, G.H.T., Ho, C.S. and Evans, M., 2024. Carbon neutrality in Malaysia and Kuala Lumpur: insights from stakeholder-driven integrated assessment modeling. <em>Frontiers in Energy Research</em>, 12, p.1336045.{" "}
      <a href="https://doi.org/10.3389/fenrg.2024.1336045" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">
        https://doi.org/10.3389/fenrg.2024.1336045
      </a>
    </li>,
    <li>
      Thompson, I., Vernon, C.R. and <strong>Khan, Z.</strong>, 2024. Tethys: A Spatiotemporal Downscaling Model for Global Water Demand. <em>Journal of Open Source Software</em>, 9(97), p.5855.{" "}
      <a href="https://doi.org/10.21105/joss.05855" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">
        https://doi.org/10.21105/joss.05855
      </a>
    </li>,
    <li>
      Rodés-Bachs, C., Sampedro, J., Horowitz, R., Van de Ven, D.J., Cui, R.Y., Zhao, A., Zwerling, M. and <strong>Khan, Z.</strong>, 2024. gcamreport: An R tool to process and standardize GCAM outputs. <em>Journal of Open Source Software</em>, 9(96), p.5975.{" "}
      <a href="https://doi.org/10.21105/joss.05975" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">
        https://doi.org/10.21105/joss.05975
      </a>
    </li>,
    <li>
      Zhao, M., <strong>Khan, Z.</strong>, Dorheim, K. and Vernon, C., 2024. helios: An R package to process heating and cooling degrees for GCAM. <em>Journal of Open Source Software</em>, 9.{" "}
      <a href="https://doi.org/10.21105/joss.06033" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">
        https://doi.org/10.21105/joss.06033
      </a>
    </li>,
    <li>
      Waite, T., Pradhan, B.B., Winyuchakrit, P., <strong>Khan, Z.</strong>, Weber, M., Pressburger, L., Chaichaloempreecha, A., Rajbhandari, S., Pita, P., Westphal, M.I. and Jonvisait, A., 2024. Stakeholder-driven carbon neutral pathways for Thailand and Bangkok: integrated assessment modeling to inform multilevel climate governance. <em>Frontiers in Energy Research</em>, 12.{" "}
      <a href="https://doi.org/10.3389/fenrg.2024.1335290" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">
        https://doi.org/10.3389/fenrg.2024.1335290
      </a>
    </li>,
    <li>
      McManamay, R.A., Vernon, C.R., Chen, M., Thompson, I., <strong>Khan, Z.</strong>, and Narayan, K.B., 2024. Dynamic urban land extensification is projected to lead to imbalances in the global land-carbon equilibrium. <em>Communications Earth & Environment</em>, 5(1), p.70.{" "}
      <a href="https://doi.org/10.1038/s43247-024-01231-y" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">
        https://doi.org/10.1038/s43247-024-01231-y
      </a>
    </li>,
    <li>
      Ahsan, H., <strong>Khan, Z.</strong>, Snyder, A., Kyle, P. and Vernon, C., 2023. osiris: An R package to process climate impacts on agricultural yields for the Global Change Analysis Model. <em>Journal of Open Source Software</em>, 8(85), p.5226.{" "}
      <a href="https://doi.org/10.21105/joss.05226" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">
        https://doi.org/10.21105/joss.05226
      </a>
    </li>,
    <li>
      Yarlagadda, B., Wild, T., Zhao, X., Clarke, L., Cui, R., <strong>Khan, Z.</strong>, Birnbaum, A. and Lamontagne, J., 2023. Trade and Climate Mitigation Interactions Create Agro‐Economic Opportunities With Social and Environmental Trade‐Offs in Latin America and the Caribbean. <em>Earth's Future</em>, 11(4), p.e2022EF003063.{" "}
      <a href="https://doi.org/10.1029/2022EF003063" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1029/2022EF003063</a>
    </li>,
    <li>
      <strong>Khan, Z.</strong>, Thompson I.F., Vernon, C.R., Graham, N.T., Wild, T., and Chen, M., 2023. Global monthly sectoral water use for 2010–2100 at 0.5° resolution across alternative futures. <em>Nature Scientific Data</em>, 10, 201.{" "}
      <a href="https://doi.org/10.1038/s41597-023-02086-2" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1038/s41597-023-02086-2</a>
    </li>,
    <li>
      Matamala, Y., Flores, F., Arriet, A., <strong>Khan, Z.</strong> and Feijoo, F., 2023. Probabilistic feasibility assessment of sequestration reliance for climate targets. <em>Energy</em>, p.127160.{" "}
      <a href="https://doi.org/10.1016/j.energy.2023.127160" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.energy.2023.127160</a>
    </li>,
    <li>
      McGrath, C., Burleyson, C., <strong>Khan, Z.</strong>, Rahman, A., Rice, J., Vernon, C. and Voisin, N., 2022. Tell: a Python package to model future total electricity loads. <em>Journal of Open Source Software</em>, 7(79), 4472.{" "}
      <a href="https://doi.org/10.21105/joss.04472" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.21105/joss.04472</a>
    </li>,
    <li>
      <strong>Khan, Z.</strong>, Zhao, M., Wild, T., Vernon, C., 2022. rmap - An R package to plot and compare tabular data on customizable maps across scenarios and time. <em>Journal of Open Source Software</em>, 7(77), p.4015.{" "}
      <a href="https://doi.org/10.21105/joss.04015" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.21105/joss.04015</a>
    </li>,
    <li>
      <strong>Khan, Z.</strong> et al., 2022. Emerging themes and future directions of multi-sector nexus research and implementation. <em>Frontiers in Environmental Science</em> – Environmental Systems Engineering.{" "}
      <a href="https://www.frontiersin.org/articles/10.3389/fenvs.2022.918085/full" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://www.frontiersin.org/articles/10.3389/fenvs.2022.918085/full</a>
    </li>,
    <li>
      Martinez de Estivariz, J., Sampedro, <strong>Khan, Z.</strong>, Vernon, C.R., Smith, S.J., Waldhoff, S.T., and Dingenen, R. Van, 2022. rfasst: An R tool to estimate air pollution impacts on health and agriculture. <em>Journal of Open Source Software</em>.{" "}
      <a href="https://joss.theoj.org/papers/10.21105/joss.03820" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://joss.theoj.org/papers/10.21105/joss.03820</a>
    </li>,
    <li>
      Kholod, N., Evans, M., <strong>Khan, Z.</strong>, Hejazi, M., Chaturvedi, V., 2021. Water-Energy-Food Nexus in India: A Critical Review. <em>Energy and Climate Change</em>, 2, 100060.{" "}
      <a href="https://doi.org/10.1016/j.egycc.2021.100060" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.egycc.2021.100060</a>
    </li>,
    <li>
      Zhao, M., Binsted, M., Wild, T.B., <strong>Khan, Z.</strong>, Iyer, G., Yarlagadda, B., Vernon, C., Patel, P., 2021. Plutus - An R package to calculate electricity investments and stranded assets from the Global Change Analysis Model. <em>Journal of Open Source Software</em>.{" "}
      <a href="https://joss.theoj.org/papers/10.21105/joss.03212" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://joss.theoj.org/papers/10.21105/joss.03212</a>
    </li>,
    <li>
      Wild, T.B., <strong>Khan, Z.</strong>, Zhao, M., Suriano, M., Bereslawski, J.L., Roberts, P., Casado, J., Gavino‐Novillo, M., Clarke, L., Hejazi, M. and Miralles‐Wilhelm, F., 2021. The Implications of Global Change for the Co‐Evolution of Argentina’s Integrated Energy‐Water‐Land Systems. <em>Earth's Future</em>, p.e2020EF001970.{" "}
      <a href="https://doi.org/10.1029/2020EF001970" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1029/2020EF001970</a>
    </li>,
    <li>
      Binsted, M.T., Iyer, G.C., Patel, P.L., Graham, N.T., Ou, Y., <strong>Khan, Z.</strong>, and Kholod, N., et al., 2021. GCAM-USA: Integrated modeling of state and subnational U.S. energy, water, and land systems within a global framework. <em>Geoscientific Model Development (GMD)</em>.{" "}
      <a href="https://doi.org/10.5194/gmd-2021-197" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.5194/gmd-2021-197</a>
    </li>,
    <li>
      <strong>Khan, Z.</strong>, Wild, T.B., Iyer, G.C., Hejazi, M. and Vernon, C.R., 2021. The future evolution of energy-water-agriculture interconnectivity across the US. <em>Environmental Research Letters</em>.{" "}
      <a href="https://doi.org/10.1088/1748-9326/ac046c" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1088/1748-9326/ac046c</a>
    </li>,
    <li>
      Wild, T.B., <strong>Khan, Z.</strong>, Clarke, L., Hejazi, M., Bereslawski, J., Suriano, M., Roberts, P., Casado, J., Miralles-Wilhelm, F., Gavino Novillo, M., Munoz-Castillo, R., Moreda, F., Yarlagadda, B., Lamontagne, J., Birnbaum, A., 2021. Integrated Energy-Water-Land Nexus Planning in the Colorado River Basin (Argentina). <em>Regional Environmental Change</em>, 21 (62).{" "}
      <a href="https://doi.org/10.1007/s10113-021-01775-1" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s10113-021-01775-1</a>
    </li>,
    <li>
      <strong>Khan, Z.</strong>, Wise, M., Patel, P., Kim, S.H., Hejazi, M., Burleyson, C., and Iyer, G., 2021. Impacts of long-term temperature change and variability on electricity investments. <em>Nature Communications</em>, 12(1), pp.1–12.{" "}
      <a href="https://doi.org/10.1038/s41467-021-21785-1" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1038/s41467-021-21785-1</a>
    </li>,
    <li>
      Binsted, M., Iyer, G., Cui, R., <strong>Khan, Z.</strong>, Dorheim, K. and Clarke, L., 2020. Evaluating long-term model-based scenarios of the energy system. <em>Energy Strategy Reviews</em>, 32, p.100551.{" "}
      <a href="https://doi.org/10.1016/j.esr.2020.100551" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.esr.2020.100551</a>
    </li>,
    <li>
      <strong>Khan, Z.</strong>, Wild, T., Carrazzone, M.E.S., Gaudioso, R., Mascari, M.P., Bianchi, F., Weinstein, F., Pérez, F., Pérez, W., Miralles-Wilhelm, F. and Clarke, L., 2020. Integrated energy-water-land nexus planning to guide national policy: an example from Uruguay. <em>Environmental Research Letters</em>.{" "}
      <a href="https://doi.org/10.1088/1748-9326/ab9389" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1088/1748-9326/ab9389</a>
    </li>,
    <li>
      <strong>Khan, Z.</strong>, Wild, T., Vernon, C., Miller, A., Hejazi, M., Clarke, L., Miralles-Wilhelm, F., Castillo, R.M., Moreda, F., Bereslawski, J.L., Micaela, S., 2020. Metis – A tool to harmonize and analyze multi-sectoral data and linkages at variable spatial scales. <em>Journal of Open Research Software</em>.{" "}
      <a href="https://doi.org/10.5334/JORS.292" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.5334/JORS.292</a>
    </li>,
    <li>
      Wise, M., Patel, P., <strong>Khan, Z.</strong>, Kim, S.H., Hejazi, M. and Iyer, G., 2019. Representing power sector detail and flexibility in a multi-sector model. <em>Energy Strategy Reviews</em>, 26, p.100411.{" "}
      <a href="https://doi.org/10.1016/j.esr.2019.100411" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.esr.2019.100411</a>
    </li>,
    <li>
      Vinca, A., Parkinson, S., Byers, E., Burek, P., <strong>Khan, Z.</strong>, Krey, V., Diuana, F., Wang, Y., Ilyas, A., Köberle, A.C. and Staffel, I., 2019. The Nexus Solutions Tool (NEST): An open platform for optimizing multi-scale energy-water-land system transformations. <em>Geoscientific Model Development Discussions</em>, pp.1–33.{" "}
      <a href="https://doi.org/10.5194/gmd-13-1095-2020" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.5194/gmd-13-1095-2020</a>
    </li>,
    <li>
      Parkinson, S., Krey, V., Huppmann, D., Kahil, T., McCollum, D., Fricko, O., Byers, E., Gidden, M.J., Mayor, B., <strong>Khan, Z.</strong> and Raptis, C., 2019. Balancing clean water-climate change mitigation trade-offs. <em>Environmental Research Letters</em>, 14(1), p.014009.{" "}
      <a href="https://doi.org/10.1088/1748-9326/aaf2a3" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1088/1748-9326/aaf2a3</a>
    </li>,
    <li>
      <strong>Khan, Z.</strong>, Linares, P., Rutten, M., Parkinson, S., Johnson, N. and García-González, J., 2018. Spatial and temporal synchronization of water and energy systems: Towards a single integrated optimization model for long-term resource planning. <em>Applied Energy</em>, 210, pp.499–517.{" "}
      <a href="https://doi.org/10.1016/j.apenergy.2017.05.003" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.apenergy.2017.05.003</a>
    </li>,
    <li>
      <strong>Khan, Z.</strong>, Linares, P. and García-González, J., 2017. Integrating water and energy models for policy driven applications. A review of contemporary work and recommendations for future developments. <em>Renewable and Sustainable Energy Reviews</em>, 67, pp.1123–1138.{" "}
      <a href="https://doi.org/10.1016/j.rser.2016.08.043" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.rser.2016.08.043</a>
    </li>,
    <li>
      <strong>Khan, Z.</strong>, Linares, P. and García-González, J., 2016. Adaptation to climate-induced regional water constraints in the Spanish energy sector: An integrated assessment. <em>Energy Policy</em>, 97, pp.123–135.{" "}
      <a href="https://doi.org/10.1016/j.enpol.2016.06.046" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.enpol.2016.06.046</a>
    </li>,
    <li>
      Parkinson, S.C., Djilali, N., Krey, V., Fricko, O., Johnson, N., <strong>Khan, Z.</strong>, Sedraoui, K. and Almasoud, A.H., 2016. Impacts of groundwater constraints on Saudi Arabia’s low-carbon electricity supply strategy. <em>Environmental Science & Technology</em>, 50(4), pp.1653–1662.{" "}
      <a href="https://doi.org/10.1021/acs.est.5b05852" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/acs.est.5b05852</a>
    </li>,
    <li>
      (Technical Contributor) USGCRP, 2017: Fifth National Climate Assessment (NCA5), Chapter 5: Energy Supply, Delivery, and Demand, U.S. Global Change Research Program, Washington, DC, USA.{" "}
      <a href="https://www.globalchange.gov/our-work/fifth-national-climate-assessment" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">Link</a>
    </li>,
    <li>
      Kintner-Meyer, M.C., Conzelmann, G., Kim, H., Zhou, N., DeStephano, P., Durga, S., Elgowainy, A., Hamilton, B., Kanudia, A., Khanna, N. and <strong>Khan, Z.</strong>, 2022. The Net Zero World Initiative’s Preliminary Analysis of Decarbonization Pathways for Five Countries. Lawrence Berkeley National Lab.{" "}
      <a href="https://doi.org/10.2172/1897738" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.2172/1897738</a>
    </li>,
    <li>
      Charles, M.M., <strong>Khan, Z.</strong>, Yu, S., Smith, S.J., Douville, T.C., Homer, J.S., Hardy, T.D., Masud, J., Yusuf, A. and Siddiqui, B., 2021. Electrification of Pakistan's Transport System: Modeling Electric Vehicle Penetration and Energy Supply Chain Impacts. Pacific Northwest National Lab.{" "}
      <a href="https://doi.org/10.2172/1820372" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.2172/1820372</a>
    </li>,
    <li>
      Vogt-Schilb, A., Breton, H., Edwards, G., Jaramillo, M., Amin, A., Waisman, H., Bataille, C., Briand, Y., Aubert, P., ... <strong>Khan, Z.</strong>, Clarke, L., Edmonds, J., ... 2019. Getting to Net-Zero Emissions: Lessons from Latin America and the Caribbean. Inter-American Development Bank.{" "}
      <a href="http://dx.doi.org/10.18235/0002024" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">http://dx.doi.org/10.18235/0002024</a>
    </li>,
    <li>
      Wild, T.B., <strong>Khan, Z.</strong>, Clarke, L., Hejazi, M., Miralles-Wilhelm, F., Munoz-Castillo, R., 2019. Case Studies of the Food-Energy-Water Nexus in Latin America and the Caribbean. Inter-American Development Bank.
    </li>,
    <li>
      Afsordegan, A., <strong>Khan, Z.</strong>, Agell Jané, N., Linares Llamas, P. and Sánchez Soler, M., 2017. Assessment of water-energy planning using qualitative multiple criteria decision aiding in a village of Costa Brava.
    </li>,
    <li>
      Linares, P., <strong>Khan, Z.</strong>, 2015. Agua, energía y cambio climático. Fundación Canal, Canal de Isabel II, Madrid, Spain.{" "}
      <a href="http://www.madrid.org/bvirtual/BVCM019289.pdf" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">http://www.madrid.org/bvirtual/BVCM019289.pdf</a>
    </li>,
    <li>
      <strong>(Editor)</strong> Abraham, E., Byers, E., Parkinson, S., and <strong>Khan, Z.</strong>, 2021. Focus on Multi-Scale Water-Energy-Land Nexus Planning to Manage Socio-Economic, Climatic, and Technological Change. <em>Environmental Research Letters</em>.{" "}
      <a href="https://iopscience.iop.org/journal/1748-9326/page/Multi-Scale-Water-Energy" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">
        https://iopscience.iop.org/journal/1748-9326/page/Multi-Scale-Water-Energy
      </a>
    </li>,
    <li>
      <strong>(Invited Reviewer)</strong> Boehm, S., Jeffery, L., Levin, K., Hecke, J., Schumer, C., Fyson, C., Majid, A., Jaeger, J., Nilsson, A., Naimoli, S., Thwaites, J., Cassidy, E., Lebling, K., Sims, M., Waite, R., Wilson, R., Castellanos, S., Singh, N., Lee, A., Geiges, A., 2023. State of Climate Action 2023. Published by multiple organizations including Bezos Earth Fund and WRI.{" "}
      <a href="https://www.wri.org/research/state-climate-action-2023" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">
        https://www.wri.org/research/state-climate-action-2023
      </a>
    </li>,
    <li>
      <strong>(Invited Reviewer)</strong> Boehm, S., Jeffery, L., Levin, K., Hecke, J., Schumer, C., Fyson, C., Majid, A., Jaeger, J., Nilsson, A., Naimoli, S., Thwaites, J., Cassidy, E., Lebling, K., Sims, M., Waite, R., Wilson, R., Castellanos, S., Singh, N., Lee, A., Geiges, A., 2022. State of Climate Action 2022. Published by multiple organizations including Bezos Earth Fund and WRI.{" "}
      <a href="https://doi.org/10.46830/wrirpt.22.00028" className="text-[#DAA520] hover:underline" target="_blank" rel="noopener noreferrer">
        https://doi.org/10.46830/wrirpt.22.00028
      </a>
    </li>,
  ];

  const visibleItems = showAll ? publications : publications.slice(0, 4);

  return (
    <ul className="list-disc pl-6 space-y-3 text-left text-sm text-gray-300">
      {visibleItems}
    </ul>
  );
};

export default PublicationsList;