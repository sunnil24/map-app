interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(options: Marker): void {
    const { position, title } = options;

    const contentString = `<div class="map-popup">
      <p><strong>Location:</strong> ${title}</p>
    </div>`;

    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: position,
      title: title,
    });

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener('click', function () {
      infowindow.open(this.googleMap, marker);
    });
  }
}
