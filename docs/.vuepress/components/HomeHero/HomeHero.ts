import { h } from "vue";
import type { FunctionalComponent, VNode } from "vue";

import HomeHero from "vuepress-theme-hope/lib/client/components/HomeHero";
import HopeLogo from "./HopeLogo";

// 支持使用Threejs加载STL格式logo
const HopeHero: FunctionalComponent = (): VNode =>
  h(HomeHero, {}, { heroImage: () => h(HopeLogo) });

HopeHero.displayName = "HopeHero";

export default HopeHero;
