function jobs() {
    var a = document.getElementById("jobInPerson1");
    var b = document.getElementById("jobInPerson2");
    var c = document.getElementById("jobInPerson3");
    var d = document.getElementById("jobVirtual1");
    var e = document.getElementById("jobVirtual2");
    var f = document.getElementById("jobVirtual3");

    if (document.querySelector('.checkbox1').checked) {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    } else {
        a.style.display = "block";
        b.style.display = "block";
        c.style.display = "block";
        d.style.display = "block";
        e.style.display = "block";
        f.style.display = "block";
    }
}

function interns() {
    var a = document.getElementById("internInPerson1");
    var b = document.getElementById("internInPerson2");
    var c = document.getElementById("internInPerson3");
    var d = document.getElementById("internVirtual1");
    var e = document.getElementById("internVirtual2");
    var f = document.getElementById("internVirtual3");

    if (document.querySelector('.checkbox2').checked) {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    } else {
        a.style.display = "block";
        b.style.display = "block";
        c.style.display = "block";
        d.style.display = "block";
        e.style.display = "block";
        f.style.display = "block";
    }
}

function volunteering() {
    var a = document.getElementById("volunteerInPerson1");
    var b = document.getElementById("volunteerInPerson2");
    var c = document.getElementById("volunteerInPerson3");
    var d = document.getElementById("volunteerVirtual1");
    var e = document.getElementById("volunteerVirtual2");
    var f = document.getElementById("volunteerVirtual3");

    if (document.querySelector('.checkbox3').checked) {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    } else {
        a.style.display = "block";
        b.style.display = "block";
        c.style.display = "block";
        d.style.display = "block";
        e.style.display = "block";
        f.style.display = "block";
    }
}


function inPerson() {
    var a = document.getElementById("jobInPerson1");
    var b = document.getElementById("jobInPerson2");
    var c = document.getElementById("jobInPerson3");
    var d = document.getElementById("internInPerson1");
    var e = document.getElementById("internInPerson2");
    var f = document.getElementById("internInPerson3");
    var g = document.getElementById("volunteerInPerson1");
    var h = document.getElementById("volunteerInPerson2");
    var i = document.getElementById("volunteerInPerson3");

    if (document.querySelector('.checkbox4').checked) {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
        g.style.display = "none";
        h.style.display = "none";
        i.style.display = "none";
    } else {
        if (document.querySelector('.checkbox1').checked) { //jobs hidden
            if (document.querySelector('.checkbox2').checked) { //jobs hidden, interns hidden
                if (document.querySelector('.checkbox3').checked) { //jobs hidden, interns hidden, volunteer hidden
                } else { //jobs hidden, interns hidden, volunteering not hidden
                    g.style.display = "block";
                    h.style.display = "block";
                    i.style.display = "block";
                }
            } else { //jobs hidden, interns not hidden
                if (document.querySelector('.checkbox3').checked) { //jobs hidden, interns not hidden, volunteer hidden
                    d.style.display = "block";
                    e.style.display = "block";
                    f.style.display = "block";
                } else { //jobs hidden, interns not hidden, volunteer not hidden
                    d.style.display = "block";
                    e.style.display = "block";
                    f.style.display = "block";
                    g.style.display = "block";
                    h.style.display = "block";
                    i.style.display = "block";
                }
            }
        } else { //jobs not hidden
            if (document.querySelector('.checkbox2').checked) { //jobs not hidden, interns hidden
                if (document.querySelector('.checkbox3').checked) { //jobs not hidden, interns hidden, volunteer hidden
                    a.style.display = "block";
                    b.style.display = "block";
                    c.style.display = "block";
                } else { //jobs not hidden, interns hidden, volunteering not hidden
                    a.style.display = "block";
                    b.style.display = "block";
                    c.style.display = "block";
                    g.style.display = "block";
                    h.style.display = "block";
                    i.style.display = "block";
                }
            } else { //jobs not hidden, interns not hidden
                if (document.querySelector('.checkbox3').checked) { //jobs not hidden, interns not hidden, volunteer hidden
                    a.style.display = "block";
                    b.style.display = "block";
                    c.style.display = "block";
                    d.style.display = "block";
                    e.style.display = "block";
                    f.style.display = "block";
                } else { //jobs not hidden, interns not hidden, volunteer not hidden
                    a.style.display = "block";
                    b.style.display = "block";
                    c.style.display = "block";
                    d.style.display = "block";
                    e.style.display = "block";
                    f.style.display = "block";
                    g.style.display = "block";
                    h.style.display = "block";
                    i.style.display = "block";
                }
            }
        }
    }
}

function virtual() {
    var a = document.getElementById("jobVirtual1");
    var b = document.getElementById("jobVirtual2");
    var c = document.getElementById("jobVirtual3");
    var d = document.getElementById("internVirtual1");
    var e = document.getElementById("internVirtual2");
    var f = document.getElementById("internVirtual3");
    var g = document.getElementById("volunteerVirtual1");
    var h = document.getElementById("volunteerVirtual2");
    var i = document.getElementById("volunteerVirtual3");

    if (document.querySelector('.checkbox5').checked) {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
        g.style.display = "none";
        h.style.display = "none";
        i.style.display = "none";
    } else {
        if (document.querySelector('.checkbox1').checked) { //jobs hidden
            if (document.querySelector('.checkbox2').checked) { //jobs hidden, interns hidden
                if (document.querySelector('.checkbox3').checked) { //jobs hidden, interns hidden, volunteer hidden
                } else { //jobs hidden, interns hidden, volunteering not hidden
                    g.style.display = "block";
                    h.style.display = "block";
                    i.style.display = "block";
                }
            } else { //jobs hidden, interns not hidden
                if (document.querySelector('.checkbox3').checked) { //jobs hidden, interns not hidden, volunteer hidden
                    d.style.display = "block";
                    e.style.display = "block";
                    f.style.display = "block";
                } else { //jobs hidden, interns not hidden, volunteer not hidden
                    d.style.display = "block";
                    e.style.display = "block";
                    f.style.display = "block";
                    g.style.display = "block";
                    h.style.display = "block";
                    i.style.display = "block";
                }
            }
        } else { //jobs not hidden
            if (document.querySelector('.checkbox2').checked) { //jobs not hidden, interns hidden
                if (document.querySelector('.checkbox3').checked) { //jobs not hidden, interns hidden, volunteer hidden
                    g.style.display = "block";
                    h.style.display = "block";
                    i.style.display = "block";
                } else { //jobs not hidden, interns hidden, volunteering not hidden
                    a.style.display = "block";
                    b.style.display = "block";
                    c.style.display = "block";
                    g.style.display = "block";
                    h.style.display = "block";
                    i.style.display = "block";
                }
            } else { //jobs not hidden, interns not hidden
                if (document.querySelector('.checkbox3').checked) { //jobs not hidden, interns not hidden, volunteer hidden
                    a.style.display = "block";
                    b.style.display = "block";
                    c.style.display = "block";
                    d.style.display = "block";
                    e.style.display = "block";
                    f.style.display = "block";
                } else { //jobs not hidden, interns not hidden, volunteer not hidden
                    a.style.display = "block";
                    b.style.display = "block";
                    c.style.display = "block";
                    d.style.display = "block";
                    e.style.display = "block";
                    f.style.display = "block";
                    g.style.display = "block";
                    h.style.display = "block";
                    i.style.display = "block";
                }
            }
        }
    }
}

