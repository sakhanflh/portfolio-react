import { TechStack } from "../components/TechStack";
import { Tools } from "../components/Tools";

export function Skill(){
    return(
        <>
        <div className="flex flex-col gap-5">
            <div className="flex gap-1 text-lg">
                <p>______</p>
                <h1 className="pt-2">Skills</h1>
            </div>
            
            {/* Button */}
            <div className="flex gap-3 w-full">
                <TechStack />
                <Tools />
            </div>
            {/* Button End */}

            {/* Tech Utility */}
            <div className="flex justify-between">
            <div className="flex flex-col gap-8">
                <div className="border border-textcolor w-44 py-5 px-3 items-center flex gap-2 rounded-lg" id="skill-utility">
                    <img src="/img/icons8-html-48.png" alt="" />
                    <div>
                        <p>HTML</p>
                        <p className="" id="skill-p">Intermediate</p>
                    </div>
                </div>
                <div className="border border-textcolor w-44 py-5 px-3 rounded-lg items-center flex gap-2" id="skill-utility">
                    <img src="/img/icons8-node-js-48.png" alt="" />
                    <div>
                        <p>Node Js</p>
                        <p className="" id="skill-p">Intermediate</p>
                    </div>
                </div>
                <div className="border border-textcolor w-44 py-5 px-3 rounded-lg items-center flex gap-2" id="skill-utility">
                    <img src="/img/icons8-vue-js-48.png" alt="" />
                    <div>
                        <p>Vue JS</p>
                        <p className="" id="skill-p">Intermediate</p>
                    </div>
                </div>
                <div className="border border-textcolor w-44 py-5 px-3 rounded-lg items-center flex gap-2" id="skill-utility">
                    <img src="/img/icons8-react-js-40.png" alt="" className="w-12"/>
                    <div>
                        <p>React</p>
                        <p className="" id="skill-p">Intermediate</p>
                    </div>
                </div>
            </div>
            {/* End */}
            <div className="flex flex-col gap-8 justify-between">
                <div className="border border-textcolor w-44 py-5 px-3 rounded-lg items-center flex gap-2" id="skill-utility">
                    <img src="/img/icons8-css-48.png" alt="" />
                    <div>
                        <p>CSS</p>
                        <p className="" id="skill-p">Intermediate</p>
                    </div>
                </div>
                <div className="border border-textcolor w-44 py-5 px-3 rounded-lg items-center flex gap-2" id="skill-utility">
                    <img src="/img/icons8-javascript-48.png" alt="" />
                    <div>
                        <p>Javascript</p>
                        <p className="" id="skill-p">Intermediate</p>
                    </div>
                </div>
                <div className="border border-textcolor w-44 py-5 px-3 rounded-lg items-center flex gap-2" id="skill-utility">
                    <img src="/img/icons8-tailwind-css-48.png" alt="" />
                    <div>
                        <p>Tailwind</p>
                        <p className="" id="skill-p">Intermediate</p>
                    </div>
                </div>
                <div className="border border-textcolor w-44 py-5 px-3 rounded-lg items-center flex gap-2" id="skill-utility">
                    <img src="/img/icons8-bootstrap-48.png" alt="" />
                    <div>
                        <p>Bootstrap</p>
                        <p className="" id="skill-p">Intermediate</p>
                    </div>
                </div>
            </div>
            </div>
            {/* Tech Utility End */}
        </div>
        </>
    )
}