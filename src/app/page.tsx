import Link from "next/link";
import ToolsCard from "./components/Tools";
import { Grid } from "@mui/material";

export default function Home() {
  const toolsList = [
    {
      name: "Spatial Analysis",
      description: "---",
      link: "/spatial-analysis",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGPXdTXOvBRD8ur3M-DPv2tsjhdI7aqtya6PuEMwfGg&s",
    },
    {
      name: "Beat Wise",
      description: "---",
      link: "/beat-wise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGPXdTXOvBRD8ur3M-DPv2tsjhdI7aqtya6PuEMwfGg&s",
    },
    {
      name: "Beat Wise",
      description: "---",
      link: "/beat-wise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGPXdTXOvBRD8ur3M-DPv2tsjhdI7aqtya6PuEMwfGg&s",
    },
    {
      name: "Beat Wise",
      description: "---",
      link: "/beat-wise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGPXdTXOvBRD8ur3M-DPv2tsjhdI7aqtya6PuEMwfGg&s",
    },
    {
      name: "Beat Wise",
      description: "---",
      link: "/beat-wise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGPXdTXOvBRD8ur3M-DPv2tsjhdI7aqtya6PuEMwfGg&s",
    },
  ];
  return (
    <>
      <Grid container spacing={0}>
        {toolsList.map((el, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link key={index} href={el.link}>
                <ToolsCard
                  name={el.name}
                  description={el.description}
                  image={el.image}
                />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
