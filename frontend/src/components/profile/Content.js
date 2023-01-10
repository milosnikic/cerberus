import { useEffect, useState } from "react";
import FaceitImage from "assets/img/faceit-logo.png";
import TwitterImage from "assets/img/twitter-logo.png";
import HltvImage from "assets/img/hltv-logo.png";
import { get, getRatingColor } from "../../utils.js";
import { Graph } from "./Graph";

export default function Content({ params }) {
  const [playerData, setPlayerData] = useState(null);
  const [stats, setStats] = useState(null);
  useEffect(() => {
    const fetchPlayerData = async () => {
      const data = await get(`/api/players/v1/${params.id}`);
      setPlayerData(data);
      setStats(JSON.parse(data?.statistics));
    };

    fetchPlayerData();
    return fetchPlayerData;
  }, []);

  return (
    <section className="relative py-16 bg-gray-100">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
          <div className="px-6">
            <div className="rounded flex justify-between py-4">
              <div className="w-full flex">
                <div className="w-full h-fit max-w-max rounded-md shadow-lg px-2 mr-2 pb-4">
                  <img
                    src={playerData?.image}
                    className="w-64 object-contain"
                    alt={playerData?.username}
                  />
                  <div className="mt-5 py-6">
                    {playerData?.nationality?.map((nation) => {
                      return (
                        <span
                          key={nation?.id}
                          className="flex py-2 justify-center"
                        >
                          <img
                            src={nation?.flag}
                            className="rounded-lg w-8 h-6 shadow-md mr-4"
                            alt={nation?.name}
                          />
                          <span className="text-xl">{nation?.name}</span>
                        </span>
                      );
                    })}
                    {playerData?.teams?.map((team, index) => {
                      return (
                        <span key={index} className="flex py-2 justify-center">
                          <img src={team?.team?.image} className="h-7" alt="" />
                          <span className="text-lg px-4 py-1">
                            {team?.team?.name}
                          </span>
                        </span>
                      );
                    })}

                    <div className="flex flex-row justify-center">
                      {playerData?.roles?.map((role, index) => {
                        return (
                          <span
                            key={index}
                            className="rounded-xl border border-gray-200 shadow-md px-3 py-1 mr-2"
                          >
                            {role}
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex gap-4 py-4 justify-center">
                      {playerData?.faceit && (
                        <a
                          href={`https://www.faceit.com/en/players/${playerData?.faceit}`}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:scale-105 shadow-lg rounded-full"
                        >
                          <img
                            src={FaceitImage}
                            alt="Faceit"
                            style={{
                              objectFit: "contain",
                              borderRadius: "100%",
                              width: "50px",
                              height: "50px",
                            }}
                          />
                        </a>
                      )}

                      {playerData?.twitter && (
                        <a
                          href={playerData?.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:scale-105 shadow-lg rounded-full"
                        >
                          <img
                            src={TwitterImage}
                            alt="Twitter"
                            style={{
                              objectFit: "contain",
                              borderRadius: "100%",
                              width: "50px",
                              height: "50px",
                            }}
                          />
                        </a>
                      )}
                      {playerData?.hltv && (
                        <a
                          href={playerData?.hltv}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:scale-105 shadow-lg rounded-full"
                        >
                          <img
                            src={HltvImage}
                            alt="HLTV"
                            style={{
                              objectFit: "contain",
                              borderRadius: "100%",
                              width: "50px",
                              height: "50px",
                            }}
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="w-full">
                    <div className="flex pt-1 text-5xl">
                      <h1>{playerData?.first_name}</h1>
                      <span className="px-2 font-bold">
                        '{playerData?.username}'
                      </span>
                      <h1>{playerData?.last_name}</h1>
                    </div>
                  </div>
                  <div>
                    <div className="flex mt-4 w-full">
                      <div className="w-full shadow-lg rounded-lg p-5 flex flex-col mb-4 mr-2">
                        <div className="flex justify-between items-center">
                          <h1 className="text-2xl mb-4">HLTV Statistics:</h1>
                          <span
                            className={`border border-gray-200 hover:scale-105 rounded-full shadow-lg text-xl p-2 mb-2 ${getRatingColor(
                              stats?.hltv?.overall["rating_2.0"]
                            )}`}
                          >
                            {stats?.hltv?.overall["rating_2.0"]}
                          </span>
                        </div>
                        <div className="flex flex-col text-medium gap-4">
                          <div>
                            <span className="uppercase font-bold">
                              Individual statistics
                            </span>
                            <div className="flex justify-between gap-2">
                              <span>Opening kills: </span>
                              {stats?.hltv?.individual?.total_opening_kills}
                            </div>
                            <div className="flex justify-between gap-2">
                              <span>Opening deaths: </span>
                              {stats?.hltv?.individual?.total_opening_deaths}
                            </div>
                            <div className="flex justify-between gap-2">
                              <span>Opening kill ratio: </span>
                              {stats?.hltv?.individual?.opening_kill_ratio}
                            </div>
                            <div className="flex justify-between gap-2">
                              <span>Opening kill rating: </span>
                              {stats?.hltv?.individual?.opening_kill_rating}
                            </div>
                            <div className="flex justify-between gap-2">
                              <span>Team win % after 1st kill: </span>
                              {
                                stats?.hltv?.individual
                                  ?.team_win_percent_after_first_kill
                              }
                            </div>
                            <div className="flex justify-between gap-2">
                              <span>First kill in won rounds: </span>
                              {
                                stats?.hltv?.individual
                                  ?.first_kill_in_won_rounds
                              }
                            </div>
                            <div className="flex justify-between gap-2">
                              <span>Rifle kills: </span>
                              {stats?.hltv?.individual?.rifle_kills}
                            </div>
                            <div className="flex justify-between gap-2">
                              <span>Sniper kills: </span>
                              {stats?.hltv?.individual?.sniper_kills}
                            </div>
                            <div className="flex justify-between gap-2">
                              <span>SMG kills: </span>
                              {stats?.hltv?.individual?.smg_kills}
                            </div>
                            <div className="flex justify-between gap-2">
                              <span>Pistol kills: </span>
                              {stats?.hltv?.individual?.pistol_kills}
                            </div>
                            <div className="flex justify-between gap-2">
                              <span>Grenade kills: </span>
                              {stats?.hltv?.individual?.grenade}
                            </div>
                            <div className="flex justify-between gap-2">
                              <span>Other: </span>
                              {stats?.hltv?.individual?.other}
                            </div>
                          </div>
                          <div>
                            <span className="uppercase font-bold">
                              Overall statistics
                            </span>
                            <div className="flex justify-between gap-3">
                              <span>Total kills: </span>
                              {stats?.hltv?.overall?.total_kills}
                            </div>
                            <div className="flex justify-between gap-3">
                              <span>Headshot %: </span>
                              {stats?.hltv?.overall?.headshot}
                            </div>
                            <div className="flex justify-between gap-3">
                              <span>Total deaths: </span>
                              {stats?.hltv?.overall?.total_deaths}
                            </div>
                            <div className="flex justify-between gap-3">
                              <span>KD Ration: </span>
                              {stats?.hltv?.overall?.kd_ratio}
                            </div>
                            <div className="flex justify-between gap-3">
                              <span>Round damage: </span>
                              {stats?.hltv?.overall?.damage_round}
                            </div>
                            <div className="flex justify-between gap-3">
                              <span>Grenade damage PR:</span>
                              {stats?.hltv?.overall?.grenade_dmg_round}
                            </div>
                            <div className="flex justify-between gap-3">
                              <span>Maps played: </span>
                              {stats?.hltv?.overall?.maps_played}
                            </div>
                            <div className="flex justify-between gap-3">
                              <span>Rounds played: </span>
                              {stats?.hltv?.overall?.rounds_played}
                            </div>
                            <div className="flex justify-between gap-3">
                              <span>Kills per round: </span>
                              {stats?.hltv?.overall?.kills_round}
                            </div>
                            <div className="flex justify-between gap-3">
                              <span>Assists per round: </span>
                              {stats?.hltv?.overall?.assists_round}
                            </div>
                            <div className="flex justify-between gap-3">
                              <span>Death per round: </span>
                              {stats?.hltv?.overall?.deaths_round}
                            </div>
                            <div className="flex justify-between gap-3">
                              <span>Rating 2.0: </span>
                              {stats?.hltv?.overall["rating_2.0"]}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full shadow-lg rounded-lg p-5 flex flex-col mb-4">
                        <div className="flex flex-col mb-4">
                          <h1 className="text-2xl">FACEIT Statistics:</h1>
                          <span className="text-xs text-gray-600 mt-0 p-0">
                            (last 100 matches)
                          </span>
                        </div>
                        <div className="flex flex-col text-medium gap-4">
                          <div>
                            <span className="uppercase font-bold">
                              Average statistics
                            </span>
                            <div className="flex justify-between gap-10">
                              <span>Kill/Death Ratio: </span>
                              {Number(stats?.faceit?.stats?.kd.toFixed(3))}
                            </div>
                            <div className="flex justify-between gap-10">
                              <span>Kill/Round Ratio: </span>
                              {Number(stats?.faceit?.stats?.kr.toFixed(3))}
                            </div>
                            <div className="flex justify-between gap-10">
                              <span>Headshot %: </span>
                              {Number(stats?.faceit?.stats?.hs_pc.toFixed(3))}
                            </div>
                            <div className="flex justify-between gap-10">
                              <span>Kills: </span>
                              {Number(stats?.faceit?.stats?.kills.toFixed(3))}
                            </div>
                            <div className="flex justify-between gap-10">
                              <span>Deaths: </span>
                              {Number(stats?.faceit?.stats?.deaths.toFixed(3))}
                            </div>
                            <div className="flex justify-between gap-10">
                              <span>Headshots: </span>
                              {Number(
                                stats?.faceit?.stats?.headshots.toFixed(3)
                              )}
                            </div>
                            <div className="flex justify-between gap-10">
                              <span>Assists: </span>
                              {Number(stats?.faceit?.stats?.assists.toFixed(3))}
                            </div>
                          </div>
                          <div>
                            <span className="uppercase font-bold">
                              Overall statistics
                            </span>
                            <div className="flex justify-between gap-10">
                              <span>Total Wins: </span>
                              {stats?.faceit?.wins}
                            </div>

                            <div className="flex justify-between gap-10">
                              <span>Total loses: </span>
                              {stats?.faceit?.loses}
                            </div>
                            <div className="flex justify-between gap-10">
                              <span>WR %: </span>
                              {stats?.faceit?.wr}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="shadow-lg rounded-lg ml-2 py-4">
                          <Graph hltv={stats?.hltv} label={"HLTV Statistics"} />
                        </div>
                        <div className="ml-2 mt-2 py-3">
                          <h2 className="pb-2">Latest HLTV matches</h2>
                          {stats?.hltv?.latest_matches.map((match) => {
                            return (
                              <a
                                href={match.link}
                                rel="noreferrer"
                                target="_blank"
                                key={match.team_name}
                                className="shadow-lg w-max rounded-sm p-3 flex flex-col mb-2 cursor-pointer hover:opacity-75"
                                style={{
                                  backgroundColor: match.won
                                    ? "rgba(0, 255, 0, 0.2)"
                                    : "rgba(255, 0, 0, 0.2)",
                                }}
                              >
                                <div className="flex flex-row gap-2 justify-between">
                                  <div className="flex">
                                    <img
                                      className="rounded w-8 h-auto"
                                      src={match.team_logo}
                                      alt={match.team_name}
                                    />
                                    <span className="px-2">
                                      {match.team_name}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-right">
                                      {match.result}
                                    </span>
                                  </div>
                                </div>

                                <span className="text-muted text-gray-500 text-xs px-2 py-1 text-ellipsis">
                                  {match.competition}
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
