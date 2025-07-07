import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Projects() {
  return (
    <section className="min-h-screen bg-slateblack text-white font-montserrat p-10 flex flex-col max-w-6xl mx-auto animate-fadeIn">

      <h2 className="text-4xl font-bold mb-8 border-b-4 border-electricblue pb-2 w-max">
        Projects I've Supported
      </h2>

      <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
        <MapContainer center={[20, 0]} zoom={2} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Example Semiconductor Fabs — Replace with your real ones */}
          <Marker position={[33.7758793, -112.1605468]}>
            <Popup>
              <div
                className="max-w-xs text-white rounded-lg p-3"
                style={{ backgroundColor: "rgba(18, 18, 18, 0.9)" }}
              >
                <h3 className="font-bold mb-2">Phoenix, AZ — TSMC Fab 21</h3>
                <img
                  src="images/TSMC-Arizona.jpeg"
                  alt="TSMC Fab in Phoenix"
                  className="w-full rounded-lg mb-2"
                />
              </div>
            </Popup>
          </Marker>

          <Marker position={[33.2418512, -111.8807785]}>
            <Popup>
              <div
                className="max-w-xs text-white rounded-lg p-3"
                style={{ backgroundColor: "rgba(18, 18, 18, 0.9)" }}
              >
                <h3 className="font-bold mb-2">Chandler, AZ — Intel Ocotillo Campus 12,22,32,42</h3>
                <img
                  src="images/Intel-Ocotillo.gif"
                  alt="Intel Fab in Chandler, AZ"
                  className="w-full rounded-lg mb-2"
                />
              </div>
            </Popup>
          </Marker>

          <Marker position={[45.5416342, -122.9147796]}>
            <Popup>
              <div
                className="max-w-xs text-white rounded-lg p-3"
                style={{ backgroundColor: "rgba(18, 18, 18, 0.9)" }}
              >
                <h3 className="font-bold mb-2">Hillsboro, OR — Intel Rohnler Acres Campus D1C, D1Xs</h3>
                <img
                  src="images/Intel-Hillsboro.jpg"
                  alt="Intel Fab in Hillsboro, Oregon"
                  className="w-full rounded-lg mb-2"
                />
              </div>
            </Popup>
          </Marker>

          <Marker position={[35.2231596, -106.6585296]}>
            <Popup>
              <div
                className="max-w-xs text-white rounded-lg p-3"
                style={{ backgroundColor: "rgba(18, 18, 18, 0.9)" }}
              >
                <h3 className="font-bold mb-2">Rio Rancho, NM — Intel Rio Rancho Campus</h3>
                <img
                  src="images/RioRancho-Campus.jpg"
                  alt="Intel Fab in Rio Rancho, New Mexico"
                  className="w-full rounded-lg mb-2"
                />
              </div>
            </Popup>
          </Marker>

          <Marker position={[31.5945750, 34.7877437]}>
            <Popup>
              <div
                className="max-w-xs text-white rounded-lg p-3"
                style={{ backgroundColor: "rgba(18, 18, 18, 0.9)" }}
              >
                <h3 className="font-bold mb-2">Kiryat Gat, Israel — Intel Kiryat Gat Campus</h3>
                <img
                  src="images/Kiryat-Gat-Campus.jpg"
                  alt="Intel Fab in Kiryat Gat, Israel"
                  className="w-full rounded-lg mb-2"
                />
              </div>
            </Popup>
          </Marker>

          <Marker position={[53.3712908, -6.5100690]}>
            <Popup>
              <div
                className="max-w-xs text-white rounded-lg p-3"
                style={{ backgroundColor: "rgba(18, 18, 18, 0.9)" }}
              >
                <h3 className="font-bold mb-2">Leixlip, Ireland — Intel Leixlip Campus</h3>
                <img
                  src="images/Intel-Leixlip.jpg"
                  alt="Intel Fab in Leixlip, Ireland"
                  className="w-full rounded-lg mb-2"
                />
              </div>
            </Popup>
          </Marker>

          <Marker position={[39.0793188, 121.8751201]}>
            <Popup>
              <div
                className="max-w-xs text-white rounded-lg p-3"
                style={{ backgroundColor: "rgba(18, 18, 18, 0.9)" }}
              >
                <h3 className="font-bold mb-2">Dalian, China — Intel Dalian Campus</h3>
                <img
                  src="images/Dalian-Campus.jpg"
                  alt="Intel Fab in Dalian, China"
                  className="w-full rounded-lg mb-2"
                />
              </div>
            </Popup>
          </Marker>

        </MapContainer>
      </div>

      <h3 className="text-2xl font-bold my-8 text-electricblue">Project List</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-gunmetal p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <h4 className="text-xl font-bold text-electricblue mb-2">TSMC Fab 21 — Phoenix, AZ</h4>
          <p className="text-gray-300 mb-1">Role: Project Controls Manager</p>
          <p className="text-gray-400">Scope: Cleanroom installation, logistics coordination, material laydown zones.</p>
        </div>

        <div className="bg-gunmetal p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <h4 className="text-xl font-bold text-electricblue mb-2">Intel Ocotillo Campus — Chandler, AZ</h4>
          <p className="text-gray-300 mb-1">Role: Logistics Consultant</p>
          <p className="text-gray-400">Scope: Multiple fab projects including cleanroom buildouts and logistics support.</p>
        </div>

        <div className="bg-gunmetal p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <h4 className="text-xl font-bold text-electricblue mb-2">Intel Ronler Acres Campus — Hillsboro, OR</h4>
          <p className="text-gray-300 mb-1">Role: Logistics/Project Management</p>
          <p className="text-gray-400">Scope: Cleanroom protocols, tool installation oversight, material logistics.</p>
        </div>

        <div className="bg-gunmetal p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <h4 className="text-xl font-bold text-electricblue mb-2">Intel Rio Rancho Campus — Rio Rancho, NM</h4>
          <p className="text-gray-300 mb-1">Role: Logistics/Construction Coordination</p>
          <p className="text-gray-400">Scope: Semiconductor expansion project, logistics, safety, contractor coordination.</p>
        </div>

        <div className="bg-gunmetal p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <h4 className="text-xl font-bold text-electricblue mb-2">Intel Kiryat Gat Campus — Israel</h4>
          <p className="text-gray-300 mb-1">Role: Logistics/Project Management</p>
          <p className="text-gray-400">Scope: Semiconductor fab projects, cleanroom protocols, global logistics.</p>
        </div>

        <div className="bg-gunmetal p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <h4 className="text-xl font-bold text-electricblue mb-2">Intel Leixlip Campus — Ireland</h4>
          <p className="text-gray-300 mb-1">Role: Logistics/Project Management</p>
          <p className="text-gray-400">Scope: Fab expansions, cleanroom tool install, material management support.</p>
        </div>

        <div className="bg-gunmetal p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <h4 className="text-xl font-bold text-electricblue mb-2">Intel Dalian Campus — China</h4>
          <p className="text-gray-300 mb-1">Role: Logistics Consultant</p>
          <p className="text-gray-400">Scope: International logistics support, semiconductor material management.</p>
        </div>

      </div>
    </section>
  );
}
